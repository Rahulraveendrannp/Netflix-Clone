import { configureStore,createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import {  options, options1, options2 } from '../utils/Constants';
import axios from 'axios';
const initialState={
    movies:[],
    genresLoaded:false,
    genres:[],
};

export const getGenres=createAsyncThunk("netflix/genres",async()=>{
    const {data:{genres}}=await axios.request(options);
    return genres;
});

const createArrayFromRawData=(array,moviesArray,genres)=>{
    array.forEach(movie => {
        const movieGenres=[];
        // movie.genre_ids.forEach((genre)=>{
        //     const name=genre.find(({id})=>{
        //         id===genre
        //     });
        //     if(name){ movieGenres.push(name.name)}
        // });
        if(movie.backdrop_path){
            moviesArray.push({
                id:movie.id,
                name:movie?.original_name ? movie.original_name : movie.original_title,
                image:movie.backdrop_path,
                genres:movie.genre_ids
            })
        }
        
    });
}

const getRawData=async(api,genres,paging=false)=>{
  const moviesArray=[];
//   for(let i=1;moviesArray.length<60 && i<10;i++){
  const {data:{results}}=  await axios.request(api);
  createArrayFromRawData(results, moviesArray, genres);
//   }
console.log(moviesArray)
  return moviesArray;
}

export const fetchMovies=createAsyncThunk("netflix/trending",async({type},thunkApi)=>{
    const {netflix:{genres}}=thunkApi.getState();
    return getRawData(options1,genres,true);
   
})

export const fetchUpcomingMovies=createAsyncThunk("netflix/upcoming",async({type},thunkApi)=>{
    const {netflix:{genres}}=thunkApi.getState();
    return getRawData(options2,genres,true);
   
})




const NetflixSlice=createSlice({
    name:"Netflix",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getGenres.fulfilled,(state,action)=>{
            state.genres=action.payload;
            state.genresLoaded=true;

        });
        builder.addCase(fetchMovies.fulfilled,(state,action)=>{
            state.movies=[...state.movies,...action.payload];

        });
        builder.addCase(fetchUpcomingMovies.fulfilled,(state,action)=>{
            state.movies=[...state.movies,...action.payload];

        })
        
    }
});

export const store=configureStore({
    reducer:{
        netflix:NetflixSlice.reducer,
    }
})