import React from 'react';
import './App.css';


import Navbar from './components/Navbar';
import CarePage from "./components/Pages/CarePage"
import CarePageHome from './components/Pages/Page2/CarePageHome';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReadmoreOne from './components/Pages/Page2/ReadmorePages/ReadmoreOne';
// import Layout from './Layout';
import ReadmoreTwo from './components/Pages/Page2/ReadmorePages/ReadmoreTwo';
import BuyerExp from './components/Pages/IndiaextraPages/BuyerExp';
import Payment from './components/Pages/IndiaextraPages/Payment';
import ReadmoreThree from './components/Pages/Page2/ReadmorePages/ReadmoreThree';
// import { Layout } from "antd";
function App() {
  return (
    <>
     <div className='layout'>
      
    {/* <Navbar/>   */}
    <div className=''>
        <Router forceRefresh={true}>
        <Navbar/>  
        <Routes>
         <Route path='/' element={<CarePage/>}/>
       
               
     
         <Route path='/australia' element={<CarePageHome/>}/>


         <Route path='/readmoreone' element={<ReadmoreOne/>}/>
         <Route path='/readmoretwo' element={<ReadmoreTwo/>}/>
         <Route path='/readmorethree' element={<ReadmoreThree/>}/>

         <Route path='/buyerexp' element={<BuyerExp/>}/>
         <Route path='/payment' element={<Payment/>}/>
    
       </Routes>
       </Router>
       </div>  
    {/* <Layout /> */}
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


