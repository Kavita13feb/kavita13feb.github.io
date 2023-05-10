
import { AiFillGithub, AiOutlineFolderView } from 'react-icons/ai'

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export const ProjectCard = ({   ProjectType,TechStack, Image, Title, Discription, Date, contributor, TotalMembers, NetlifyLink, GithubLink }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
   

  return (

    <div className="project-card section" id={`${Title}`} >
 {
  ProjectType=="Team"?(
    <div style={{
      marginTop: '3%', display: 'flex', marginLeft: '10px',
      alignItems: 'center', gap: "5px",flexWrap: "wrap",
    
    }}>
      <img src='https://i.postimg.cc/gkCZtNs2/profile-pic-2.png' width='5%' style={{ borderRadius: '50%', }} />
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
       <p style={{ color: 'gray', marginLeft: "-70%", marginTop: '-2%', fontSize: '15px' }}>{Date} </p>
       <h1 className="project-title">{Title}</h1>
       
       <p className="project-description" style={{ width: '90%', margin: 'auto', textAlign: 'justify' }}>{Discription}</p>
       <img src={Image} width="50%" style={{borderRadius:"20px"}}/>
       {/* <div style={{width:"40%",margin:"auto"}}>
            <h2> Single Item</h2>
          
            <Slider {...settings} >
           
            <img src={Image} width="100%" style={{borderRadius:"20px"}}/>
            <img src={Image} width="100%" style={{borderRadius:"20px"}}/>
            </Slider>
          </div> */}
      
      
       <p className="project-tech-stack">Tech-stack:- {TechStack}</p>
       <a className="project-github-link" href={`${GithubLink}`} target="_blank"><AiFillGithub size={"25px"} /></a>
       <a className="project-deployed-link" href={`${NetlifyLink}`} target="_blank"><AiOutlineFolderView size={"30px"} color="white" /></a>
     </div>
      
     </div>
  )
    }
  
 