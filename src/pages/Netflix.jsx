import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";
import movieLogo from "../assets/homeTitle.webp";
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchUpcomingMovies, getGenres } from "../store";
import Slider from "../components/Slider";


const Netflix = () => {
    const [isScrolled,setIsScrolled]=useState(false);
    const dispatch=useDispatch();
    const genresLoaded=useSelector(state=>state.netflix.genresLoaded);
    const movies=useSelector((state)=>state.netflix.movies)
    useEffect(()=>{
        dispatch(getGenres());

    },[])
    useEffect(()=>{
        if(genresLoaded){
            dispatch(fetchMovies({type:"all"}));
            dispatch(fetchUpcomingMovies({type:"all"}));
        } 

    },[genresLoaded])

    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0 ? false : true)   
    }
  return (
    <>
    <Navbar isScrolled={isScrolled}/>
    <div className="hero relative ">
        <img src={backgroundImage} alt="background" className="h-[100vh] w-[100vw] brightness-50 md:brightness-75"/>
        <div className="container absolute bottom-3 md:bottom-20">
            <div className="logo">
                <img src={movieLogo} alt="" className="h-[100px] md:h-[100%] ml-8 md:ml-20" />
            </div>
            <div className="ml-8 md:ml-20 flex gap-2 md:gap-5 mt-2 md:mt-6 text-xs md:text-lg">
                <button className="flex justify-center items-center gap-1 md:gap-3 rounded-md bg-white px-3 md:px-4 py-1 text-black">
                    <FaPlay />Play
                </button>
                <button className="flex justify-center items-center gap-1 md:gap-3 rounded-md bg-gray-400 px-3 md:px-4 py-1  text-black">
                    <AiOutlineInfoCircle /> More Info
                </button>
            </div>
        </div>
    </div>
    <Slider movies={movies}/>
    </>
  )
}

export default Netflix