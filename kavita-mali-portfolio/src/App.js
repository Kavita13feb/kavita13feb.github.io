import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { AllRoute } from './components/AllRoute.jsx/AllRoute';
import { SideBar } from './components/Home/SideBar/SideBar';
import { RightSideBar } from './components/Home/SideBar/RightSidebar';
import { useEffect, useState } from 'react';




function App() {

 

  

  return (
    <div className="App">
 <Navbar/>
 {/* <div  className='Allthree'> */}
  {/* <SideBar/> */}
 <AllRoute/>
 {/* <RightSideBar/> */}

 {/* </div> */}
 
 
    </div>
  );
}

export default App;
