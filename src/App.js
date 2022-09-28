import React from 'react';
import './App.css';

// import Navbar from './components/Navbar';
// import CarePage from "./components/Pages/CarePage"
// import CarePageHome from './components/Pages/Page2/CarePageHome';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ReadmoreOne from './components/Pages/Page2/ReadmorePages/ReadmoreOne';
import Layout from './Layout';
// import { Layout } from "antd";
function App() {
  return (
    <>
     <div className='layout'>
    {/* <Navbar/>   */}
    <Layout />
    </div>
    </>
  //  <div className='care'>
  //    <Router forceRefresh={true}>
  //    <Navbar/>  
  //    <Routes>
  //     <Route path='/' element={<CarePage/>}/>
    
            
  
  //     <Route path='/australia' element={<CarePageHome/>}/>
  //     <Route path='/readmoreone' element={<ReadmoreOne/>}/>
  //   </Routes>
  //   </Router>
  //   </div>  
    
  );
}

export default App;


