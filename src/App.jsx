import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/JSXFiles/OtherElements/Footer';
import Home from './Components/JSXFiles/Home/Home';
import Facilities from './Components/JSXFiles/Facilities/Facilities';
import Rooms from './Components/JSXFiles/Rooms/Rooms';
import Contact from './Components/JSXFiles/Contact/Contact';
import Book from './Components/JSXFiles/RoomBooking/Booking'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ScrollToTop from "./Components/JSXFiles/OtherElements/ScrollToTop";
import NewNavbar from './Components/JSXFiles/OtherElements/NewNavbar';
import CookieConsent from './Components/JSXFiles/OtherElements/CookieConsent';
import CursorTrail from './Components/JSXFiles/OtherElements/CursorTrail'; 

const App = () => {

  useEffect(() => {
    // Disable Right Click
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      alert("Right-click is disabled on this page!");
    });

    // Disable F12 & Ctrl+Shift+I
    document.onkeydown = function (e) {
      if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
        alert("DevTools are disabled on this page!");
        return false;
      }
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="main-page">
      <CursorTrail /> 
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsent />
        <NewNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Facilities" element={<Facilities />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/room-booking" element={<Book />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
