import React from 'react'
import './sidebar.css'
import { AiFillHome, AiTwotoneMail, AiFillPhone, AiFillGithub, AiFillLinkedin, AiOutlineFolderView, AiFillMessage } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"
import { GrFormView, GrContact } from "react-icons/gr"
import { GiJetPack } from "react-icons/gi"
import { SiGraphql, SiNounproject } from "react-icons/si"
import { MdOutlineDeveloperMode, MdMessage } from "react-icons/md"
import styled from 'styled-components'
import { Link } from 'react-scroll'
export const SideBar = () => {
  return (
    <SideBarContainer className='sidebar'  >

      <div className='full-screen-sidebar' >
        <img className="home-img" src='https://i.postimg.cc/gkCZtNs2/profile-pic-2.png'  width='50%' style={{ borderRadius: '50%', }} />
        <h3 id="user-detail-name">Kavita Mali</h3>
        <h4>Full Stack Web Devloper</h4>
        <div className='sidebar-contact-info'><AiFillHome size={"25px"} /><p>Bhilwara ,Rajastan</p></div>
        <a href="mailto:kavitamali0515@gmail.com" target="_blank"className='sidebar-contact-info'>< AiTwotoneMail size={"25px"} /><p id="contact-email">kavitamali0515@gmail.com</p></a>
        <a href="tel:+918740041513" target="_blank" className='sidebar-contact-info'><AiFillPhone size={"25px"} /><p id="contact-phone">+91 8740041513</p></a>
        <a href='https://github.com/Kavita13feb'  className='sidebar-contact-info' target="blank" id="contact-github"><AiFillGithub size={"25px"} /><p  id="contact-github"> Kavita13feb </p></a>
        <a className='sidebar-contact-info' href='https://www.linkedin.com/in/kavita-mali-132a92210' target="_blank" ><AiFillLinkedin size={"25px"} /><p id="contact-linkedin"> in/kavita-mali</p></a>
        <a  className='sidebar-contact-info'  href='Kavita_Mali_Resume.pdf'  target="_blank"onClick={()=>window.open("https://drive.google.com/file/d/1TwW36uYeOF6OPqBcDFCldVaHAhK_vdv9/view?usp=sharing")}><AiOutlineFolderView size={"30px"} color="#a9afb7" /><button className= "sidebar-resume-btn">Reusme</button></a>
      </div>

    <div className='mid-screen-sidebar increasegap' >
        <img className="home-img" src='https://i.postimg.cc/gkCZtNs2/profile-pic-2.png' width='40%' style={{ borderRadius: '50%', }} />
        <Link smooth={true} offset={-100} duration={800} className='link'  to='home'><AiFillHome size={"30px"} /><h3 >Home</h3></Link>
        <Link smooth={true} offset={-15} duration={800} className='link' to='about'><FaUserCircle size={"30px"} /><h3 >About </h3></Link>
        <Link smooth={true} offset={-50} duration={800} className='link' to='skills'><SiGraphql size={"30px"} /><h3 >Skills</h3></Link>
        <Link smooth={true} offset={-140} duration={800} className='link' to='projects'><GiJetPack size={"30px"} /><h3 >Projects</h3></Link>
        <Link smooth={true} offset={-90} duration={2000} className='link' to='contact'><MdMessage size={"30px"} /><h3 >Contact</h3></Link>
       <Link smooth={true} offset={-90} duration={2000} className='link'>  <a   href='Kavita_Mali_Resume.pdf' download target="_blank"onClick={()=>window.open("https://drive.google.com/file/d/1TwW36uYeOF6OPqBcDFCldVaHAhK_vdv9/view?usp=sharing")}><AiOutlineFolderView size={"30px"} color="#a9afb7" /><button className= "sidebar-resume-btn" >Reusme</button></a> </Link>
      
        <div style={{ width:"90%",marginTop: "20px", justifyContent:"center",gap:"20px",display: "flex" }}>
        <a href="mailto:kavitamali0515@gmail.com" target="_blank" id="contact-email">< AiTwotoneMail size={"25px"} /></a>

        <a href="tel:+918740041513" target="_blank"  id="contact-phone"><AiFillPhone size={"25px"} /></a> 
        <a href='https://github.com/Kavita13feb'   target="blank" id="contact-github"><AiFillGithub size={"25px"} /></a>
    
        <a  href='https://www.linkedin.com/in/kavita-mali-132a92210' target="_blank" id="contact-linkedin" ><AiFillLinkedin size={"25px"} /></a>
        </div>
     </div>
      

    </SideBarContainer>
  )
}


const SideBarContainer = styled.div`
left: 0;
borderRadius:10px

`

