import React from 'react'
import CardSlider from './CardSlider'

const Slider = ({movies}) => {
    
const getMoviesFromRange=(from,to)=>{
    return movies.slice(from,to);
}

  return (
    <div>
        <CardSlider title="Trending Now" data={getMoviesFromRange(0,10)} />
        <CardSlider title="New Releaess" data={getMoviesFromRange(10,20)} />
        <CardSlider title="Action Movies" data={getMoviesFromRange(30,40)} />
        <CardSlider title="Popular On Netflix" data={getMoviesFromRange(20,30)} />
        <CardSlider title="Upcoming" data={getMoviesFromRange(10,20)} />
    </div>
  )
}

export default Slider