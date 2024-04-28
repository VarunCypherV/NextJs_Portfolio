"use client";
import React from "react";

function Timeline({data}) {

  return (
    <div className="TL_Parent">
      <div className="TL_Date">
        <p>{data.date}</p>
      </div>
      <div className="TL_Icon">
        <img src="/Assets/About/Pin.png" alt="Icon" />
      </div>
      <div className="TL_Desp">
        {data.description}
      </div>
    </div>
  );
}

export default Timeline;
