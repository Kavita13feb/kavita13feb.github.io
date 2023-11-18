import { Flex, Spacer } from '@chakra-ui/react'
import { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaLongArrowAltDown, FaUserCircle } from 'react-icons/fa'
import { GiJetPack } from 'react-icons/gi'
import { SiGraphql } from 'react-icons/si'
import { TbArrowBarToDown} from 'react-icons/tb'

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
            <Link smooth={true} offset={-90} duration={800} className='nav-link projects' to='projects'><h3 >Projects</h3></Link>
            <Link smooth={true} offset={-90} duration={2000} className='nav-link contact' to='contact'><h3 >Contact</h3></Link>
        </div>
        < div className='logo'>        

         <button  id="resume-button-1"><a id="resume-link-1" className='nav-link resume' style={{color:"black",display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"}} href='Kavita_Mali_Resume.pdf' download target="_blank"onClick={()=>window.open("https://drive.google.com/file/d/1TwW36uYeOF6OPqBcDFCldVaHAhK_vdv9/view?usp=sharing")}><p>Resume</p><TbArrowBarToDown size={"18px"} color="rgb(20, 67, 85)"/></a></button>
    </ div>
    

    </div>

     <div   className='footer-nav'>
       
        <div className='mid-nav'>
            <Link smooth={true}  duration={800} className='nav-link about' to='home'><AiFillHome size={"30px"} /></Link>
            <Link smooth={true}  duration={800} className='nav-link skills' to='about'><FaUserCircle size={"30px"} /></Link>
            <Link smooth={true} duration={800} className='nav-link projects' to='skills'><SiGraphql size={"30px"} /></Link>
            <Link smooth={true} duration={2000} className='nav-link contact' to='projects'><GiJetPack size={"30px"} /></Link>
        </div>

    

    </div>

   
    </div>
}

