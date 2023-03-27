import React from "react";
import GitHubCalendar from "react-github-calendar";

export const RightSideBar = () => {
  return (
    <div className='sidebar right-sidebar' style={{right:'0',width:"24%",borderRadius:"10px"}} >
      <h1>My stats on Github</h1>

      <div className="github_container container" style={{width:"100%",marginTop:"15px"}}>
        <a href="https://github.com/Kavita13feb" target="_blank" rel="noreferrer">
          <img
            alt="Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=kavita13feb&show_icons=true&count_private=true&theme=tokyonight"
            // height="192px"
            
            width={"80%"}
          />
        </a>
      </div>

      <div className="github_container container" style={{width:"100%",marginTop:"15px"}}>
        <a href="https://github.com/Kavita13feb" target="_blank" rel="noreferrer">
          <img
            alt="Github Stats"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=kavita13feb&layout=compact&theme=shades-of-purple"
            // height="192px"
            width={"80%"}
          />
        </a>
      </div>

      <div className="github_container container" style={{width:"100%",marginTop:"20px"}}>
        <a href="https://github.com/Kavita13feb" target="_blank" rel="noreferrer">
          <img
            alt="Github Stats"
            src="https://streak-stats.demolab.com/?user=kavita13feb&theme=tokyonight"
            // height="192px"
            width={"80%"}

          />
        </a>
      </div>
      
      <div className="github_container container" style={{marginTop:"20px",width:"75%",margin:"auto",backgroundColor:"black",padding:"10px",color:"white",border:"1px solid white"}}>
        <a  style={{textDecoration:"none"}} href="https://github.com/kavita13feb" target="_blank" rel="noreferrer">
          <GitHubCalendar username="kavita13feb" className="calender"   style={{color:"white",textDecoration:"none"}}   />
        </a>
      </div>
    </div>
     
     
    
    
  )
}
 