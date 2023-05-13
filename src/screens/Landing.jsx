import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import Products from "../components/Sections/Products"
import Sponsored from "../components/Sections/Sponsored";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Products/>
      <Contact />
      <Sponsored/>
      <Footer />
    </>
  );
}


