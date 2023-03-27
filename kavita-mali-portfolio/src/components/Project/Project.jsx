import React from 'react'
import { ProjectCard } from './ProjectCard'



export const Project = () => {



const Projects =[
  {
    Title:"Steinfild",
    Date : "23 Feburary 2023",
    Image : "https://i.postimg.cc/J7HqHwJw/Screenshot-5.png",
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
    Discription :"This is an online shopping E-commerce website for phone cases, covers, lifestyle & personal accessories.A collaborative project built by a team of 4 developers, completed in 5 days.",
    TechStack :"React | Redux | CSS | Chakra-UI | HTML",
    NetlifyLink :"https://e-carry.netlify.app/",
    GithubLink : "https://github.com/ninja-mono1696/E-CARRY",
    PictureDescription : ["https://i.postimg.cc/DwxfJw30/E-carry-Home.jpg","https://ninja-mono1696.github.io/static/media/E-Carry.006e35ae82452c4cf68e.png","https://i.postimg.cc/fbgbFT8p/e-carry-product-Page.jpg"],
    ProjectType:"Team",
    contributor:"Monojit Mondal",
    TotalMembers :4
  },
,  {
    Title:"EverHour",
    Date : "2 October 2022",
    Image : "https://i.postimg.cc/3xF4Lh5Q/ever-home.jpg",
    Discription :"Everhour is a time tracking and team management tool that helps businesses and freelancers track their time spent on projects, tasks, and clients. It offers a range of features that allow users to manage projects, track time, and create reports.",
    TechStack :"JS| CSS | HTML",
    NetlifyLink :"https://dreamy-cendol-3a7724.netlify.app/",
    GithubLink : "https://github.com/Kavita13feb/deep-sense-4601",
    PictureDescription : ["https://i.postimg.cc/3xF4Lh5Q/ever-home.jpg","https://i.postimg.cc/dVrDhYtT/e-testi.jpg","https://i.postimg.cc/d3Zwg2hT/e-login.jpg","https://i.postimg.cc/59QXhLd3/ever-home2.jpg"],
    ProjectType:"Indedual",
    contributor:null,
    
  },  {
    Title:"ShopBag",
    Date : "11 November 2022",
    Image : "https://i.postimg.cc/QxwGRKDp/s-admin.jpg",
    Discription :"Shopbag is clone of meanbuy.com which is an online shopping E-commerce website for Home decore, covers, lifestyle & personal accessories. It is A collaborative project built by a team of 4 developers, completed in 5 days.",
    TechStack :"React | Redux | CSS | Chakra-UI | HTML",
    NetlifyLink :"https://fascinating-starlight-f562ee.netlify.app/",
    GithubLink : "https://github.com/03rahulahuja/violent-market-7865",
    PictureDescription : ["https://i.postimg.cc/Tw6TBLrk/shop-BAG-HOME.jpg","https://i.postimg.cc/rsp2LSz9/S-LOGIN.jpg","https://i.postimg.cc/QxwGRKDp/s-admin.jpg"],
    ProjectType:"Team",
    contributor:"Deepak Kumar",
    TotalMembers :4
  }

]

  return (
    <div  id="projects" className='section' >
      {/* <h1>check</h1> */}
     <div className='section'>
    <h1 style={{marginLeft:"-75%"}}>Projects</h1>
    <p className='text'>Hello there! 
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
    <div style={{bacgroundColor:":rgb(59, 104, 120)",display:'flex',flexDirection :"column" ,gap : "20px" ,border:""}}>
   {
      Projects.map((el)=>(
        <ProjectCard key ={el.id} {...el}/>
      ))
    } 
      </div>   
     </div>

  )
}
