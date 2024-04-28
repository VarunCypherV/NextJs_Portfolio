"use client";

import React from "react";

import Hero from "../Sections/Hero";
import About from "../Sections/About";
import Work from "../Sections/Work";
import Footer from "../Sections/Footer";

function page() {
  return (
    <div>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default page;
