
import { AiFillEye, AiFillGithub, AiOutlineFolderView } from 'react-icons/ai'

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GrFormView, GrView } from 'react-icons/gr';
import { BsEye } from 'react-icons/bs';



export const ProjectCard = ({   ProjectType,TechStack, Image, Title, Discription, Date, contributor, TotalMembers, NetlifyLink, GithubLink }) => {



  return (

    <div className="project-card section" id={`${Title}`} >
 {
  ProjectType=="Team"?(
    <div style={{
      marginTop: '3%', display: 'flex', marginLeft: '10px',
      alignItems: 'center', gap: "5px",flexWrap: "wrap",
    
    }}>
      <img src='https://i.postimg.cc/gkCZtNs2/profile-pic-2.png' width='5%' style={{ borderRadius: '50%',boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }} />
      <h3>Kavita Mali</h3>
      <p style={{ color: 'gray' }}>is with </p>
      <h3>{contributor}</h3>
  <p style={{ color: 'gray' }} className='total-member'>and {TotalMembers - 2} others </p>
  
  
   </div>
  ):(
    <div style={{
      marginTop: '3%', display: 'flex', marginLeft: '10px',
      alignItems: 'center', gap: "5px",flexWrap: "wrap",
   
    }}>
      <img src='https://i.postimg.cc/gkCZtNs2/profile-pic-2.png' width='5%' style={{ borderRadius: '50%', }} />
      <h3>Kavita Mali</h3>
      <p style={{ color: 'gray' }}> Developed Individual Project </p>

  
  
  
   </div>

  )

 }

     <div >
       <p className='date'>{Date} </p>
     
       <img src={Image} width="90%" style={{borderRadius:"20px"}}/>
        <h1 className="project-title" >{Title}</h1>
       
       
      
       <p className="project-description text" style={{ width: '90%', margin: 'auto', textAlign: 'justify' }} >{Discription}</p>
      
       {/* <div style={{width:"40%",margin:"auto"}}>
            <h2> Single Item</h2>
          
            <Slider {...settings} >
           
            <img src={Image} width="100%" style={{borderRadius:"20px"}}/>
            <img src={Image} width="100%" style={{borderRadius:"20px"}}/>
            </Slider>
          </div> */}
      
      
       <p className="project-tech-stack text">Tech-stack:- {TechStack}</p>
       <div style={{display:'flex' ,justifyContent:'center',alignItems:'center',gap:"5%"}}> 
       
       <a className="project-github-link g-btn" href={`${GithubLink}`} target="_blank"><AiFillGithub size={"25px"} /></a>
       <a className="project-deployed-link g-btn" href={`${NetlifyLink}`} target="_blank"><BsEye size={"25px"}  /></a></div>
      
     </div>
      
     </div>
  )
    }
  
 