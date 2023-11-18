import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { AllRoute } from './components/AllRoute.jsx/AllRoute';
import { SideBar } from './components/Home/SideBar/SideBar';
import { RightSideBar } from './components/Home/SideBar/RightSidebar';
import { useEffect, useState } from 'react';
import { Effect } from './ParticleEffect';




function App() {

 

  

  return (
    <div className="App">

 <Navbar/>
 {/* <div  className='Allthree'> */}
  {/* <SideBar/> */}
 <AllRoute/>
 {/* <RightSideBar/> */}

 {/* </div> */}
 
 {/* <img src="w.jpg"/> */}
    </div>
  );
}

export default App;
