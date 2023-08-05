import React, {  useRef, useState } from 'react'
import Card from './Card'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const CardSlider = ({ data, title }) => {

    const [showControls, setShowControls] = useState(false);
    const listRef = useRef();
    const [sliderPosition, setSliderPosition] = useState(0);
    const handleDirection = (direc) => { 
        let dist=listRef.current.getBoundingClientRect().x -50;
        if (direc == "left" && sliderPosition > 0) {
            listRef.current.style.transform = `translateX(${430 + dist}px)`;
            setSliderPosition(sliderPosition - 1);
          }
          if (direc == "right" && sliderPosition < 3) {
            listRef.current.style.transform = `translateX(${-430 + dist}px)`;
            setSliderPosition(sliderPosition + 1);
          }
    }

    return (
        <div className='flex flex-col gap-4 relative p-2 md:p-8'
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}>
            <h1 className='ml-1 md:ml-5 text-base md:text-xl font-bold'>{title}</h1>
            <div>
                <div className={` ${!showControls ? "hidden" : ""} flex items-center justify-center 
               absolute z-10 top-5 md:top-0 h-full bottom-0 w-[50px] transition-all delay-150 ease-in-out left-0`}>
                    <AiOutlineLeft onClick={() => handleDirection('left')} className='text-lg'/>
                </div>
                <div className='flex translate-x-0 w-max gap-4 transition-all ease-in-out  md:ml-5' ref={listRef}>
                    {
                        data.map((movie, index) => {
                            return <Card movieData={movie} index={index} key={movie.id} />
                        })
                    }
                </div>
                <div className={`right ${!showControls ? "hidden" : ""} flex right-0 items-center justify-center
                absolute z-40 top-5 md:top-0 h-full bottom-0 w-[50px] transition-all  delay-150 ease-in-out `}>
                    <AiOutlineRight onClick={() => handleDirection('right')} className='text-lg' />
                </div>
            </div>


        </div>
    )
}

export default CardSlider