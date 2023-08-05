import { styled } from "styled-components"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { useState } from "react";
import {FaPowerOff, FaSearch} from "react-icons/fa"


const Navbar = ({isScrolled}) => {
    const links = [
        { name: "Home",link: '/' },
        { name: "TV Shows",link: '/tv' },
        { name: "Movies",link: '/movies' },
        { name: "My List",link: '/mylist' }
    ]
    const [showSearch,setShowSearch]=useState(false);
    const [inputHover,setInputHover]=useState(false);

    return (
        <Container>
            <nav className={`flex fixed top-0 h-[45px] md:h-[70px] w-full justify-between z-10 items-center 
            transition-all ease-out ${isScrolled ? "bg-black" : ""}`}>
                <div className="left gap-8 flex a-center">
                    <div className="brand flex a-center j-center">
                        <img src={logo} alt="logo" className="h-[40px] md:h-[60px]" />
                    </div>
                    <div className="links list-none items-center gap-2 hidden md:gap-8 md:flex">
                        {
                            links.map(({name,link})=>{
                                return(
                                    <li key={name}>
                                        <Link to={link} >{name}</Link>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="right gap-4 flex a-center mr-6">
                    <div className={`search ${showSearch ? "show-search border-[1px] rounded-md border-white " :""} flex gap-1 items-center justify-center`}>
                        <button className="bg-transparent" onFocus={()=>setShowSearch(true)} >
                            <FaSearch />
                        </button>
                        <input type="text" placeholder=" Search"  className={`${showSearch ? "opacity-100 w-full visible" :"w-0"}
                           opacity-0 transition-all ease-out bg-transparent border-transparent focus:outline-none
                        text-white`}
                        onMouseEnter={()=>inputHover(true)} onMouseLeave={()=>inputHover(false)}
                        onBlur={()=>{
                            setShowSearch(false)
                            setInputHover(false)
                        }}/>
                    </div>
                    <button>
                        <FaPowerOff className="text-red-900"/>
                    </button>
                </div>
            </nav>
        </Container>
    )
}

const Container = styled.div``;

export default Navbar