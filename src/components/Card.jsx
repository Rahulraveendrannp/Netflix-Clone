import React, { useState } from 'react'
import { IoPlayBackCircleSharp } from 'react-icons/io5';
import { RiThumbDownFill, RiThumbUpFill } from 'react-icons/ri';
import { BsCheck } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import video from "../assets/star-wars.mp4"

const Card = ({ movieData, isLiked = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} 
        className='max-w-[230px] w-[110px] md:w-[230px] h-full cursor-pointer relative'>
            <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movie" className='rounded-md w-full h-full z-10' />

            {
                isHovered && (
                    <div className='z-50 h-max w-40 md:w-80 absolute top-[-18vh] left-0 
                    rounded-md shadow shadow-slate-400 bg-[#181818] transition-all ease-in-out'>
                        <div className='relative h-[80px] md:h-[140px]'>
                            <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} className='absolute w-full h-full object-cover z-10 rounded-md top-0'/>
                            <video src={video} autoPlay loop muted className='absolute w-full h-full object-cover rounded-md top-0 z-10'></video>
                        </div>
                        <div className="flex flex-col p-4 gap-2">
                            <h3 className='text-sm  md:text-lg md:font-bold' >
                                {movieData.name}
                            </h3>
                            <div className="flex justify-between ">
                                <div className="flex gap-2">
                                    <IoPlayBackCircleSharp title='play' style={{fontSize:"1rem",cursor:"pointer",transition:"0.3s"}} className='hover:text-[#868181]'/>
                                    <RiThumbUpFill title='Like' style={{fontSize:"1rem",cursor:"pointer",transition:"0.3s"}} className='hover:text-[#868181]'/>
                                    <RiThumbDownFill title='Dislike' style={{fontSize:"1rem",cursor:"pointer",transition:"0.3s"}} className='hover:text-[#868181]'/>
                                    {
                                        isLiked ?
                                            <BsCheck title="Remove From List" /> :
                                            <AiOutlinePlus title="Add To My List" />

                                    }
                                </div>
                                <div>
                                    <BiChevronDown title='More Info' style={{fontSize:"1rem",cursor:"pointer",transition:"0.3s"}} className='hover:text-[#868181]' />
                                </div>
                            </div>
                         
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Card