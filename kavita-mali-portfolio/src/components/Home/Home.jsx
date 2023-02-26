import React from 'react'
import { About } from '../About/About'
import { Contect } from '../Contect/Contect'
import { Github } from '../Github/Github'
import { Project } from '../Project/Project'
import { Skills } from '../Skills/Skills'
// import { styled } from 'styled-components'
export const Home = () => {
  return (
    <div>
    <div id="home"style={{width:'60%',height:'500px',margin:'15% 20% 0',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',backgroundColor:'white'}}>

    <img src='https://i.postimg.cc/63b4XXsC/Navy-And-White-Geometric-Technology-Linked-In-Banner-2.png' width='100%'/>
    
    <img src='https://i.postimg.cc/gkCZtNs2/profile-pic-2.png'  width='25%' style={{borderRadius:'50%', marginRight:"70%",marginTop:"-15%"}}/>
   <h1 style={{ marginRight:"70%",marginTop:"-1%"}}>Kavita Mali</h1>
   <h3 style={{ marginRight:"70%",marginTop:"-3%"}}>Full Stack Web Developer</h3>
   
    </div>
    <About/>
    <Skills/>
    <Project/>
    <Github/>
    <Contect/>
   
    </div>


  )
}