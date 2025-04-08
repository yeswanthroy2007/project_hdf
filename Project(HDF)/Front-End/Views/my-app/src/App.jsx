import './App.css';
import React from 'react';
import AboutUs from './AboutUs.jsx';
import Features from './Features.jsx';
import Navbar from './Navbar.jsx';
import SafeRides from './SafeRides.jsx'; 
import Showcase from './Showcase.jsx';
import WhyChooseUs from './WhyChooseUs.jsx';
// import { Routes,Route } from 'react-router-dom';
// import Login from './Login.jsx';
// import BookRideForm from './ridebooking.jsx';
// import RideForm from './findride.jsx';
function App() {
return(
  <>
    {/* <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path="/findride" element={<BookRideForm/>} />
      <Route path="/addride" element={<RideForm/>} />
    </Routes> */}
    <div className="container">
      <Navbar />
      <Showcase />
      <div className="content-wrapper">
        <div className="content-inner">
          <WhyChooseUs />
          <Features />
        </div>
        <AboutUs />
        <SafeRides /> 
      </div>
    </div>
  </>
  )
}

export default App
