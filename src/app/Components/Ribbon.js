"use client";
import React from "react";

const data = [
  "Full Stack Web Development",
  "UI/UX",
  "DataScience",
  "AWS",
  "Devops",
];

function Ribbon() {
  return (
    <div className="Ribbon_Parent">
      {data.map((item, index) => (
        <>
          <div className="Ribbon_Item" key={index}>
            <p className="text-white">{item}</p>
          </div>
          <div className="Ribbon_Item" key={index}>
            {index !== data.length - 1 && (
              <img src={`/Assets/Hero/3d_box.png`} alt="Box" />
            )}
          </div>
        </>
      ))}
    </div>
  );
}

export default Ribbon;
