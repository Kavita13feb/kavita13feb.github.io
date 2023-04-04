import { Flex, Spacer } from '@chakra-ui/react'
import { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { GiJetPack } from 'react-icons/gi'
import { SiGraphql } from 'react-icons/si'
import { Link } from 'react-scroll'
import styled from "styled-components"
import "./navbar.css"
export const Navbar = () => {
 

   


    return <div>
        <div  id="nav-menu" className='navbar' >
        < div className='logo'>
            <Link className='nav-link home'style smooth={true} offset={-100} duration={800}  to='home'>
            <img  width="100%" src='https://i.postimg.cc/HLs13XS2/Whats-App-Image-2023-03-17-at-18-24-35.jpg' />

            </Link> 
        </ div>
        <div className='mid-nav'>
            <Link smooth={true} offset={-90} duration={800} className='nav-link about' to='about'><h3>About </h3></Link>
            <Link smooth={true} offset={-90} duration={800} className='nav-link skills' to='skills'><h3 >Skills</h3></Link>
            <Link smooth={true} offset={-90} duration={800} className='nav-link projects' to='projects'><h3 >Project</h3></Link>
            <Link smooth={true} offset={-90} duration={2000} className='nav-link contact' to='contact'><h3 >Contact</h3></Link>
        </div>
        < div className='logo'>        

         <button  id="resume-button-1"><a id="resume-link-1" className='nav-link resume' style={{color:"black"}} href='kavita_mali_resume.pdf' download target="_blank"onClick={()=>window.open("https://drive.google.com/file/d/1KSMiCwuOxMaNDyLJfYI85cgOwSUZkvc5/view?usp=share_link")}>Reusme</a></button>
           

        </ div>
    

    </div>
   
    </div>
}

