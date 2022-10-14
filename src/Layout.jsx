import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarePage from "./components/Pages/CarePage";
import BuyerExp from "./components/Pages/IndiaextraPages/BuyerExp";
import Payment from "./components/Pages/IndiaextraPages/Payment";
import CarePageHome from "./components/Pages/Page2/CarePageHome";
import ReadmoreOne from "./components/Pages/Page2/ReadmorePages/ReadmoreOne";
import ReadmoreThree from "./components/Pages/Page2/ReadmorePages/ReadmoreThree";
import ReadmoreTwo from "./components/Pages/Page2/ReadmorePages/ReadmoreTwo";
function Layout() {
    return (
        <div className=''>
        <Router forceRefresh={true}>
        {/* <Navbar/>   */}
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
    )
}
export default Layout;