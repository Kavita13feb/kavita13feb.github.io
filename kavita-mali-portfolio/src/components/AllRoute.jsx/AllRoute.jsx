

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../About/About'
import { Contect } from '../Contect/Contect'
import { HomePage } from '../Home/HomePage'
import { Project } from '../Project/Project'

import { Skills } from '../Skills/Skills'

export const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/'element={<HomePage/>}/>
            <Route path='/about'element={<About/>}/>
            <Route path='/skills'element={<Skills/>}/>
            <Route path='/projects'element={<Project/>}/>
            <Route path='/Contact'element={<Contect/>}/>
      
        </Routes>
    </div>
  )
}

