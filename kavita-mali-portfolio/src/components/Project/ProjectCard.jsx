import React from 'react'
import { AiFillGithub, AiOutlineFolderView } from 'react-icons/ai'
import Slider from "react-slick";




export const ProjectCard = ({ TechStack, Image, Title, Discription, Date, contributor, TotalMembers, NetlifyLink, GithubLink }) => {

 
   

  return (

    <div className="project-card section"  >
 
 <div style={{
        marginTop: '3%', display: 'flex', marginLeft: '10px',
        alignItems: 'center', gap: "5px"
      }}>
        <img src='https://i.postimg.cc/gkCZtNs2/profile-pic-2.png' width='5%' style={{ borderRadius: '50%', }} />
        <h3>Kavita Mali</h3>
        <p style={{ color: 'gray' }}>is with </p>
        <h3>{contributor}</h3>
        <p style={{ color: 'gray' }}>and {TotalMembers - 2} others </p>
     </div>
     <div >
       <p style={{ color: 'gray', marginRight: "74%", marginTop: '-2%', fontSize: '15px' }}>{Date} </p>
       <h1 className="project-title">{Title}</h1>
       
       <p className="project-description" style={{ width: '90%', margin: 'auto', textAlign: 'justify' }}>{Discription}</p>
       <img src={Image} width="50%" style={{borderRadius:"20px"}}/>
       <p className="project-tech-stack">Tech-stack:- {TechStack}</p>
       <a className="project-github-link" href={`${GithubLink}`} target="_blank"><AiFillGithub size={"25px"} /></a>
       <a className="project-deployed-link" href={`${NetlifyLink}`} target="_blank"><AiOutlineFolderView size={"30px"} color="white" /></a>
     </div>
      
     </div>
  )
    }
  
 