import React from 'react'
import { ProjectCard } from './ProjectCard'

export const Project = () => {

const Projects =[
  {
    Title:"E-Carry",
    Date : "19 January 2023",
    Image : "https://ninja-mono1696.github.io/static/media/E-Carry.006e35ae82452c4cf68e.png",
    Discription :"This is a online shopping E-commerce website for phone cases, covers, lifestyle & personal accessories.A collaborative project built by a team of 4 developers, completed in 5 days.",
    TechStack :"React | Redux | CSS | Chakra-UI | HTML",
    NetlifyLink :"https://e-carry.netlify.app/",
    GithubLink : "https://github.com/ninja-mono1696/E-CARRY",
    PictureDescription : "",
    ProjectType:"Team",
    contributor:"Monojit Mondal",
    TotalMembers :4
  },
  {
    Title:"ShopBag",
    Date : "11 November 2022",
    Image : "https://ninja-mono1696.github.io/static/media/E-Carry.006e35ae82452c4cf68e.png",
    Discription :"This is a online shopping E-commerce website for phone cases, covers, lifestyle & personal accessories.A collaborative project built by a team of 4 developers, completed in 5 days.",
    TechStack :"React | Redux | CSS | Chakra-UI | HTML",
    NetlifyLink :"https://e-carry.netlify.app/",
    GithubLink : "https://github.com/ninja-mono1696/E-CARRY",
    PictureDescription : "",
    ProjectType:"Team",
    contributor:"Deepak Kumar",
    TotalMembers :4
  }
]

  return (
    <div  id="projects" style={{width:'60%',height:"800px",margin:'-28% 20% 30%', display:'flex',flexDirection :"column" ,gap : "20px",backgroundColor:'bluevoilet'}}>
    <div style={{width:'100%',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',backgroundColor:'white'}}>
    <h1>Projects</h1>
    <p style={{width:'60%',margin:'auto',textAlign:'justify'}}>Hello there! 
    I'm thrilled to share with you some of my recent projects and the skills
     I've developed along the way. As a Full Stack developer, 
     I take pride in my ability to tackle complex problems and create impactful solutions
    that meet and exceed expectations. I hope that my projects will provide you with a 
      better understanding of my capabilities and how I can contribute to your team or 
      organization.
     Without further ado, let's dive into my projects.
     </p>
    <h2>Project navigation</h2>
    </div>
    <div style={{display:'flex',flexDirection :"column" ,gap : "20px",boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
    {
      Projects.map((el)=>(
        <ProjectCard key ={el.id} {...el}/>
      ))
    }
    </div>
     </div>

  )
}
