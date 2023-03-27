import React from 'react'

import styled from 'styled-components'


export const Home = () => {

    return (
        <Topintro >

            <img src='https://i.postimg.cc/63b4XXsC/Navy-And-White-Geometric-Technology-Linked-In-Banner-2.png' width='100%' style={{ borderRadius: '10px' }} />

            <img src='https://i.postimg.cc/gkCZtNs2/profile-pic-2.png' width='25%' style={{ borderRadius: '50%', marginRight: "70%", marginTop: "-15%" }} />
            <h1 id="user-detail-name" style={{ marginRight: "70%", marginTop: "-1%" }}>Kavita Mali</h1>
            <h3 style={{ marginRight: "70%", marginTop: "-3%" }}>Full Stack Web Developer</h3>
            <div className='intro-skills'>

                <div><h3 >1200+ </h3><h4>coding hours</h4></div>
                <div> <h3 >600+ </h3><h4>DSA problems</h4></div>
                <div><h3>5+</h3><h4 >projects</h4></div>

            </div>
            <div style={{ margin: "4% 1%", width: "48%", display: "flex", gap:"2%" }}>
                <button className='s-btn'>MongoDb</button>
                <button className='s-btn'>Express</button>
                <button className='s-btn'>React</button>
                <button className='s-btn'>Node.js</button>
            </div>
            <a id="resume-link-2" href='kavita_mali_resume.pdf' download target="_blank" onClick={()=>window.open("https://drive.google.com/file/d/1KSMiCwuOxMaNDyLJfYI85cgOwSUZkvc5/view?usp=share_link")}><button id="resume-button-2">Resume</button></a>    
         
      
        </Topintro>
    )
}

const Topintro = styled.div`


 border-radius: 10px;
 height: 500px;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 background-color: rgb(27, 79, 98)

`

