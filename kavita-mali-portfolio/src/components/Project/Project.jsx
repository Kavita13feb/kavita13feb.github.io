import React, { useState } from 'react'
import { ProjectCard } from './ProjectCard'

import { Link } from 'react-scroll'
import './project.css'

export const Project = () => {



const Projects =[
  {
    Title:"Meesho Clone",
    Date : "23 February 2023",
    Image : "https://puja2795.github.io/static/media/meesho-clone.d68c35e2493bd3ad7b85.png",
    Discription :"Meesho is a social E- commerce platform based in India that allows individuals to start their own online businesses by selling products to their social network.",
    TechStack :"React | Redux | CSS | Chakra-UI | HTML | Node.js | Express | MongoDb | Moongose",
    NetlifyLink :"https://clone-of-meesho.vercel.app/",
    GithubLink : "https://github.com/puja2795/meesho",
    PictureDescription : ["https://i.postimg.cc/x1tyFMMR/home.jpg","https://i.postimg.cc/wxCWhXQR/stenfild-product-Page.jpg"],
    ProjectType:"Team",
    contributor:"Pujarini Sahoo",
    TotalMembers :4
  },
  {
    Title:"Steinfild",
    Date : "23 February 2023",
    Image : "stenfild.png",
    Discription :" This is clone of nearbuy.com. which is India's first hyper-local online platform that enables customers and local merchants to discover and engage with each other.",
    TechStack :"React | Redux | CSS | Chakra-UI | HTML",
    NetlifyLink :"https://stellular-cocada-270b8a.netlify.app/",
    GithubLink : "https://github.com/Shivaay044/billowing-baseball-1752",
    PictureDescription : ["https://i.postimg.cc/x1tyFMMR/home.jpg","https://i.postimg.cc/wxCWhXQR/stenfild-product-Page.jpg"],
    ProjectType:"Team",
    contributor:"Shivendra Singh",
    TotalMembers :4
  },
  {
    Title:"E-Carry",
    Date : "19 January 2023",
    Image : "https://ninja-mono1696.github.io/static/media/E-Carry.006e35ae82452c4cf68e.png",
    Discription :"This is an online shopping E-commerce website for phone cases, covers, lifestyle & personal accessories.",
    TechStack :"React | Redux | CSS | Chakra-UI | HTML",
    NetlifyLink :"https://e-carry.netlify.app/",
    GithubLink : "https://github.com/ninja-mono1696/E-CARRY",
    PictureDescription : ["https://i.postimg.cc/DwxfJw30/E-carry-Home.jpg","https://ninja-mono1696.github.io/static/media/E-Carry.006e35ae82452c4cf68e.png","https://i.postimg.cc/fbgbFT8p/e-carry-product-Page.jpg"],
    ProjectType:"Team",
    contributor:"Monojit Mondal",
    TotalMembers :4
  },
  {
    Title:"FitPro",
    Date : "14 December 2022",
    Image : "fitpro.png",
    Discription :"FitPro dedicated to provide a comprehensive platform to support fitness and helps to achieve health and wellness goals.",
    TechStack :"React | CSS | Chakra-UI | HTML",
    
    NetlifyLink :"https://fitpro-gold.vercel.app/",
    GithubLink : "https://github.com/Kavita13feb/Fitness-web",
    PictureDescription : ["https://i.postimg.cc/3xF4Lh5Q/ever-home.jpg","https://i.postimg.cc/dVrDhYtT/e-testi.jpg","https://i.postimg.cc/d3Zwg2hT/e-login.jpg","https://i.postimg.cc/59QXhLd3/ever-home2.jpg"],
    ProjectType:"Individual",
    contributor:null,
    
  },
   
   {
    Title:"EverHour",
    Date : "2 October 2022",
    Image : "https://i.postimg.cc/3xF4Lh5Q/ever-home.jpg",
    Discription :"Everhour is a time tracking and team management tool that helps businesses and freelancers track their time spent on projects, tasks, and clients.", 
    TechStack :"JS| CSS | HTML",
    NetlifyLink :"https://dreamy-cendol-3a7724.netlify.app/",
    GithubLink : "https://github.com/Kavita13feb/deep-sense-4601",
    PictureDescription : ["https://i.postimg.cc/3xF4Lh5Q/ever-home.jpg","https://i.postimg.cc/dVrDhYtT/e-testi.jpg","https://i.postimg.cc/d3Zwg2hT/e-login.jpg","https://i.postimg.cc/59QXhLd3/ever-home2.jpg"],
    ProjectType:"Individual",
    contributor:null,
    
  },
]


const [className,setClassName]=useState("normal")

const handleProjectView=(className)=>{
  setClassName(className)
}


  return (
    <div  id="projects" className='section' >
      {/* <h1>check</h1> */}
     <div className='section'>
    <h1 >Projects</h1>
    <p className='text'>Hello there! 
    I'm thrilled to share with you some of my recent projects and the skills
     I've developed along the way. 
     </p>
    {/* <h2>Project navigation</h2> */}
    {/* <div style={{display:'flex',justifyContent:"center" ,border:"1px solid red" ,position:"sticky",top:"0"}}>
      {
        Projects.map((el)=>(
          <Link style={{border:"1px solid red",width:"15%"}}smooth={true} offset={-90} duration={800} to={`${el.Title}`}> <button className='s-btn' >{el.Title}</button></Link>
        ))
      }
      </div> */}
    </div>
    <div>
      
   {
      Projects.map((el,i)=>(
        <ProjectCard key ={i} {...el} />
      ))
    } 
      </div>   
     </div>

  )
}
