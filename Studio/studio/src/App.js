import React, { useEffect } from "react";

import ScrollReveal from "scrollreveal";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Cointainer from "./Components/Cointainer/Cointainer";
import Services from "./Components/Services/Services";
import Feedback from "./Components/Feedback/Feedback";
import Gallery from "./Components/Gallery/Gallery";
import Blog from "./Components/LatestBlog/Blog";
import Instagram from "./Components/Instagram/Instagram";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/Porfolio/Portfolio";
import { BrowserRouter as Router,Routes , Route } from "react-router-dom";
import ServicesSection from "./Components/ourservices/ServicesSection";
import TopNavigation from "./Components/TopNavigation/TopNavigation";
const App = () => {
  // useEffect(() => {
  //   const scrollRevealOption = {
  //     distance: "50px",
  //     origin: "bottom",
  //     duration: 1000,
  //   };

  //   ScrollReveal().reveal(".section__header", scrollRevealOption);
  //   ScrollReveal().reveal(".section__description", {
  //     ...scrollRevealOption,
  //     delay: 500,
  //   });

  //   // DOM manipulation code
  //   const menuBtn = document.getElementById("menu-btn");
  //   const navLinks = document.getElementById("nav-links");

  //   // Ensure that the menu button exists before proceeding
  //   if (menuBtn && navLinks) {
  //     const menuBtnIcon = menuBtn.querySelector("i");

  //     menuBtn.addEventListener("click", (e) => {
  //       navLinks.classList.toggle("open");

  //       const isOpen = navLinks.classList.contains("open");
  //       menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  //     });

  //     navLinks.addEventListener("click", (e) => {
  //       navLinks.classList.remove("open");
  //       menuBtnIcon.setAttribute("class", "ri-menu-line");
  //     });
  //   }

  //   // Cleanup event listeners on unmount
  //   return () => {
  //     if (menuBtn) {
  //       menuBtn.removeEventListener("click", () => {});
  //     }
  //     if (navLinks) {
  //       navLinks.removeEventListener("click", () => {});
  //     }
  //   };
  // }, []);

  return (
    <div >
<Router>
  <Routes>

<Route path="/" element={
  <>
  
 <Header />
      <Cointainer/>
      <Portfolio/>
      <Services />
      <Feedback/>
      <Gallery/>
      <Blog/>
      <Instagram/>
      <Footer/> 

</>}/>
<Route path="/servicessection" element={<ServicesSection/>}/>  
<Route path="/topnavigation" element={<TopNavigation/>}/> 

   </Routes>
      </Router>
    </div>
  );
};

export default App;
