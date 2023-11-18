import React from 'react'
import { About } from '../About/About'
import { Contect } from '../Contect/Contect'
import { Github } from '../Github/Github'
import { Project } from '../Project/Project'
import { Skills } from '../Skills/Skills'
import { RightSideBar } from './SideBar/RightSidebar'
import { SideBar } from './SideBar/SideBar'


import "./home.css"
import styled from 'styled-components'
import { Home } from './Home'
import { Effect } from '../../ParticleEffect'
export const HomePage = () => {
 
  return (
    <HomeDiv id="home" >
        {/* <Effect/> */}

        <SideBar/>
        <Midcontainer className='midcontainer'>

       
        <Home/>
        <About />
        <Skills />
        <Project />
        <Github />
        <Contect />
       
        </Midcontainer>
      
      
      
     <RightSideBar/>
      </HomeDiv>


  )
}

const HomeDiv =styled.div`



`

const Midcontainer=styled.div`


`