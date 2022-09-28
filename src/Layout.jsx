import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarePage from "./components/Pages/CarePage";
import CarePageHome from "./components/Pages/Page2/CarePageHome";
import ReadmoreOne from "./components/Pages/Page2/ReadmorePages/ReadmoreOne";
function Layout() {
    return (
        <div className='care'>
        <Router forceRefresh={true}>
        <Navbar/>  
        <Routes>
         <Route path='/' element={<CarePage/>}/>
       
               
     
         <Route path='/australia' element={<CarePageHome/>}/>
         <Route path='/readmoreone' element={<ReadmoreOne/>}/>
       </Routes>
       </Router>
       </div>  
    )
}
export default Layout;