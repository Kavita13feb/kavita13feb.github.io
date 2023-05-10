import React from "react";
import { AiFillHome, AiFillPhone, AiTwotoneMail } from "react-icons/ai";

import styled from "styled-components";

export const Home = () => {
  return (
    <Topintro>
      <img
        src="https://i.postimg.cc/63b4XXsC/Navy-And-White-Geometric-Technology-Linked-In-Banner-2.png"
        width="100%"
        style={{ borderRadius: "10px" }}
      />

      <img
        src="https://i.postimg.cc/gkCZtNs2/profile-pic-2.png"
        width="25%"
        style={{ borderRadius: "50%", marginRight: "70%", marginTop: "-15%" }}
      />
      <h1 id="user-detail-name" className="name">Kavita Mali</h1>
      <h3 >
        Full Stack Web Developer
      </h3>
      <div className="intro-skills">
        <div>
          <h3>1200+ </h3>
          <h4>coding hours</h4>
        </div>
        <div>
          {" "}
          <h3>600+ </h3>
          <h4>DSA problems</h4>
        </div>
        <div>
          <h3>5+</h3>
          <h4>projects</h4>
        </div>
      </div>

      <div className="contact-details">
      <div className='contact-info'><AiFillHome size={"20px"} /><p>Bhilwara ,Rajastan</p></div>
        <a href="mailto:kavitamali0515@gmail.com" target="_blank"className='contact-info'>< AiTwotoneMail size={"20px"} /><p id="contact-email">kavitamali0515@gmail.com</p></a>
        <a href="tel:+918740041513" target="_blank" className='contact-info'><AiFillPhone size={"20px"} /><p id="contact-phone">+91 8740041513</p></a>
        {/* <a href='https://github.com/Kavita13feb'  className='sidebar-contact-info' target="blank" id="contact-github"><AiFillGithub size={"25px"} /><p  id="contact-github"> Kavita13feb </p></a> */}
        {/* <a className='sidebar-contact-info' href='https://www.linkedin.com/in/kavita-mali-132a92210' target="_blank" ><AiFillLinkedin size={"25px"} /><p id="contact-linkedin"> in/kavita-mali</p></a> */}
        {/* <a  className='sidebar-contact-info'  href='kavita_mali_resume.pdf'  target="_blank"onClick={()=>window.open("https://drive.google.com/file/d/1KSMiCwuOxMaNDyLJfYI85cgOwSUZkvc5/view?usp=share_link")}><AiOutlineFolderView size={"30px"} color="#a9afb7" /><button className= "sidebar-resume-btn">Reusme</button></a>   */}

      </div>
      <div
        style={{ margin: "4% 1%", width: "48%", display: "flex", gap: "2%" }}
      >
        <button className="s-btn">MongoDb</button>
        <button className="s-btn">Express</button>
        <button className="s-btn">React</button>
        <button className="s-btn">Node.js</button>
      </div>
      <button id="resume-button-2" className="home-resume-btn">
        <a
          id="resume-link-2"
          href="Kavita_Mali_Resume.pdf"
          download=""
          target="_blank"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1TwW36uYeOF6OPqBcDFCldVaHAhK_vdv9/view?usp=sharing"
            )
          }
        >
          Resume
        </a>
      </button>
    </Topintro>
  );
};

const Topintro = styled.div`
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: rgb(27, 79, 98);
`;
