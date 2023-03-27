import { Flex, Spacer } from '@chakra-ui/react'
import { Link } from 'react-scroll'
import styled from "styled-components"
import "./navbar.css"
export const Navbar = () => {
    return <NAV  id="nav-menu" className='navbar'>
        < Logo>
            <Link className='nav-link home'style smooth={true} offset={-100} duration={800}  to='home'>
            <img  width="100%" src='https://i.postimg.cc/HLs13XS2/Whats-App-Image-2023-03-17-at-18-24-35.jpg' />

            </Link> 
        </ Logo>
        <MidNav>
            <Link smooth={true} offset={-100} duration={800} className='nav-link about' to='about'><h3>About </h3></Link>
            <Link smooth={true} offset={-90} duration={800} className='nav-link skills' to='skills'><h3 >Skills</h3></Link>
            <Link smooth={true} offset={-90} duration={800} className='nav-link projects' to='projects'><h3 >Project</h3></Link>
            <Link smooth={true} offset={-90} duration={2000} className='nav-link contact' to='contact'><h3 >Contact</h3></Link>
        </MidNav>
        < Logo>        

            <a id="resume-link-1" className='nav-link resume'  href='kavita_mali_resume.pdf' download target="_blank"onClick={()=>window.open("https://drive.google.com/file/d/1KSMiCwuOxMaNDyLJfYI85cgOwSUZkvc5/view?usp=share_link")}><button  id="resume-button-1">Reusme</button></a>
           

        </ Logo>
    

    </NAV>
}

const NAV = styled.div`

display: grid;
 justify-content: space-between;  
grid-template-columns: 10% 40% 10%;
 gap:10%; 
position: fixed;
top: 0;
width: 100%;
height:80px;
background-color:rgb(20, 67, 85);

`
const Logo=styled.div`

display:flex;
justify-content: center; 
align-items:center

`

const MidNav=styled.div`
display:flex;
justify-content:center;
gap:5%
`