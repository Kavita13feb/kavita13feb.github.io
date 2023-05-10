import React from 'react'
// import {styled} from 'styled-components''
import './Skill.css'
import {SiJavascript} from 'react-icons/si'
export const Skills = () => {

  const Skills=[
    {icon:"https://pluspng.com/img-png/logo-javascript-png-other-resolutions-240-240-pixels-240.png",
    name:"Javascipt"
  },
  {icon:"https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png",
    name:"HTML"
  },
{icon:"https://www.logolynx.com/images/logolynx/8f/8fb97dec724d750d2085173816712ffc.png",
name:"CSS"
},
{icon:"https://clipground.com/images/react-logo-png-7.png",
name:"React"
},
{icon:"https://www.saashub.com/images/app/service_logos/133/m5cfl8yv6mfy/large.png?1581601252",
name:"Chakra"
},
{icon:"https://th.bing.com/th/id/OIP.yPRN87C9vjrdtIBY7UTAiAHaGs?pid=ImgDet&rs=1",
name:"Redux"
},
 {icon:"https://th.bing.com/th/id/OIP.yqywoCSzDBYXGl8yKppjwgHaHa?pid=ImgDet&rs=1",
name:"TypeScript"
},
{icon:"https://avatars2.githubusercontent.com/u/8908513?s=400&v=4",
name:"cypress"
},
{icon:"https://www.nucamp.co/assets/imgs/bootcamps/logo-mongodb-leaf.svg",
name:"MongoDB"
},
{icon:"https://ih1.redbubble.net/image.438908244.6144/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg",
name:"Express"
},
{icon:"https://www.pngfind.com/pngs/m/683-6833893_node-js-logo-png-transparent-png.png",
name:"Node.JS"
},
{
  icon :"https://quiin.s3.us-east-1.amazonaws.com/vendors/logos/000/370/678/original/Vercel-logo-sq.png?1613739333",
  name :"Vercel"
},
{
  icon :"https://th.bing.com/th/id/OIP.vz7_8tUPWjssC87owmj88gHaHa?pid=ImgDet&rs=1",
  name:"Netlify"
},
{
  icon :"https://img.stackshare.io/service/11319/tmYAm4ow_400x400.jpg",
  name:"Render"
},
{
  icon :"https://th.bing.com/th/id/OIP.Xa0BEkwl0Zx4qnY9lMbD7gHaHa?pid=ImgDet&rs=1",
  name:"git"
},
{
  icon :"https://mrpaulandrew.files.wordpress.com/2018/11/github-icon.png",
  name:"github"
},
{
  icon :"https://th.bing.com/th/id/OIP.adeqa7j9sEDYE3-KVdZiRQHaHx?pid=ImgDet&rs=1",
  name:"Vscode"
},
{
  icon :"https://clipground.com/images/codepen-logo-8.png",
  name:"CodePen"
},
{
  icon :"https://th.bing.com/th/id/OIP.Ct5PZlCEbpqBLfY9qo5LSAHaHa?pid=ImgDet&rs=1",
  name:"CodeSandBox"
},
{
  icon :"https://avatars3.githubusercontent.com/u/983194?s=280&v=4",
  name:"Replit"
},


  ]
  return (
    <div  id="skills" className='section' >
    
    <h1 >Skills</h1>
    <p className='text'>
      I am excited to showcase my skills. I have a strong passion
       for Website development, and I believe that I have the necessary knowledge and expertise 
       to contribute to a project/team/company. 
     So these are my skills that I can bring to the table.
    </p>
    
    <div className='skills-container'>
    {
Skills.map((el)=>(
  <div className='skill-icon-container skills-card'>
<img className='skills-card-img skill-icon' src ={el.icon} width='30%'/>
    <p className="skills-card-name">{el.name}</p>
  </div>

))
}
    </div>
    
     </div>
  )
}

