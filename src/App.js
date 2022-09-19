import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import CarePage from "./components/Pages/CarePage"
import CarePageHome from './components/Pages/Page2/CarePageHome';
import { BrowserRouter as Router, Routes, Route,useNavigate, useLocation  } from "react-router-dom";
import ReadmoreOne from './components/Pages/Page2/ReadmorePages/ReadmoreOne';
function App() {
  return (
   <div className='care'>
     <Router forceRefresh={true}>
     <Navbar/>  
     <Routes>
      <Route path='/' element={<CarePage/>}/>
    
            
  
      <Route path='/carepagehome' element={<CarePageHome/>}/>
      <Route path='/readmoreone' element={<ReadmoreOne/>}/>
    </Routes>
    </Router>
    </div>  
    
  );
}

export default App;
