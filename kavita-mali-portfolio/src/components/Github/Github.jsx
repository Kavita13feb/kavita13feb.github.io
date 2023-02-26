import React from "react";
import GitHubCalendar from "react-github-calendar";

export const Github = () => {
  return (
    <div style={{width:'60%',height:'900px',margin:'37% 20%',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',backgroundColor:'white'}}>
    <h1 >Github</h1>
    <div className="github section" id="Github">
      
      <span className="section_subtitle">Calender And Stats</span>

      <div className="github_container container">
        <a href="https://github.com/kavita13feb" target="_blank" rel="noreferrer">
          <GitHubCalendar username="kavita13feb" className="calender" />
        </a>
      </div>
      <div className="github_container container">
        <a href="https://github.com/Kavita13feb" target="_blank" rel="noreferrer">
          <img
            alt="Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=kavita13feb&show_icons=true&count_private=true&theme=tokyonight"
            height="192px"
          />
        </a>
      </div>
      <div className="github_container container">
        <a href="https://github.com/Kavita13feb" target="_blank" rel="noreferrer">
          <img
            alt="Github Stats"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=kavita13feb&layout=compact&theme=shades-of-purple"
            height="192px"
          />
        </a>
      </div>

      <div className="github_container container">
        <a href="https://github.com/Kavita13feb" target="_blank" rel="noreferrer">
          <img
            alt="Github Stats"
            src="https://streak-stats.demolab.com/?user=kavita13feb&theme=tokyonight"
            height="192px"
          />
        </a>
      </div>
    </div>
     
     </div>
  )
}
