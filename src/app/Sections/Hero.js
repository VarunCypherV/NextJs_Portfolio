"use client";

import React from "react";
import Ribbon from "../Components/Ribbon";
import NavBar from "../Components/NavBar";
function Hero() {
  return (
    <div className="Hero_Parent">
      <div className="H_Child1">
        <img className="H_BottomLeftImage" src="/Assets/Hero/P2.png" />
        <div className="H_Nav">
          <NavBar />
        </div>
        <div className="H_Title">
          <img className="H_TopRightImage" src="/Assets/Hero/Polygon1.png" />
          <div className="H_Content">
            <p className="H_subtitle">Hello I Am</p>
            <p className="H_name">VARUN <br/> VETRIVENDAN</p>
            <div className="H_Button">
              <p>Get In Touch</p>
              <img src="/Assets/Hero/Arrow.png"/>
            </div>
            <img className="Me" src="/Assets/Hero/mehd.png" />
            <img className="H_TopRightImage" src="/Assets/Hero/Polygon1.png" />
          </div>
        </div>
      </div>

      <div className="H_Child2">
        <Ribbon />
      </div>
    </div>
  );
}

export default Hero;
