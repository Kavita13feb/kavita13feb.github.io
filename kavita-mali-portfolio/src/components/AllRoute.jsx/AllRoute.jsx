

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../About/About'
import { Home } from '../Home/Home'

export const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/about'element={<About/>}/>
        </Routes>
    </div>
  )
}

