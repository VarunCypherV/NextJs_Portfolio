"use client";

import React from "react";
import Socials from "../Components/Socials";

function Footer() {
  const resumePath = "/Assets/Resume/resume.pdf";

  return (
    <div className="F_Parent">
      <div className="F_Row1_Parent1">
        <div className="F_Row1_Child1">
          <>
            <p>HAVE A PROJECT OR OPPORTUNITY IN MIND?</p>
          </>
          <div className="FooterCaption">
            <p id="Big">LETS TALK</p>
          </div>
        </div>

        <div className="F_Row1_Child2">

          <div className="ReachOut">
            <div className="Reach">
              <img src="/Assets/Footer/highlight.png" />
              <h2>REACH OUT TO ME</h2>
            </div>

            <div className="EmailContainer">
                <h4>VARUNVK2004@GMAIL.COM</h4>
            </div>

            <a href={resumePath} className="resume-container" target="_blank">
              <img src="/Assets/Footer/pdf.png" className="resume-image" />
              <h4>RESUME</h4>
            </a>
          </div>
        </div>
        <div className="F_Row1_Child3">
          <Socials />
        </div>
      </div>

      <div className="F_Row1_Parent2">
        <img src="/Assets/Footer/cr.png" class="cr-image" />
        <p>Varun Vetrivendan All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
