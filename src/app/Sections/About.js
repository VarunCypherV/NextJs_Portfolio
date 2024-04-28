"use client";
import React from "react";
import Timeline from "../Components/Timeline";

const data = [
  {
    date: "SEPT - NOV 2023",
    description: "SUMMER INTERNSHIP at THE RAMCO CEMENTS LIMITED",
  },
  {
    date: "JULY 2023 - JULY 2024",
    description: "JOINED CODECHEF CLUB - VICE PRESIDENT",
  },
  {
    date: "MAY 2023 - JULY 2024",
    description: "JOINED DATASCIENCE CLUB - PROJECTS TEAM",
  },
  {
    date: "JULY 2022 - JULY 2023",
    description: "JOINED ANDROID CLUB - TECHNICAL TEAM",
  },
  {
    date: "SEPT 2021",
    description:
      "JOINED VELLORE INSTITUTE OF TECHNOLOGY CHENNAI - CURRENT CGPA - 8.92",
  },
  {
    date: "AUG 2021",
    description:
      "CLEARED CLASS 12 FROM SRIMATHI SUNDARAVALLI MEMORIAL SCHOOL - PERCENTAGE - 95.8%",
  },
];

function About() {
  return (
    <div className="A_Parent">
      <div className="A_Title">
        <img src="/Assets/Footer/highlight.png" />
        <h1>About me!</h1>
      </div>
      <div className="A_Body">
        <div className="A_B_left">
          <div className="A_B_L_me">
            <p>
            They say 20s is the age of adventure , Being 20 I think its rightly said! Ever since I started My Journey in different fields in the technical world, I have always felt it to be an amazing adventure with different challenges and learn curves. But to answer who am I outside the technical role. I am a jovial easy going pre final year college student who loves cricket , food , games , movies and hanging out with friends and more...
            </p>
          </div>
     
          <div className="A_B_L_tech">
            <p>
            Speaking On my technical prowess , I am a Full Stack Developer and Data science enthusiast with ML and DL Domain Knowledge. I Have worked on my projects and also have gone hackathons hence getting that wonderful team experience realizing what it takes to be in a team and many more valuable lessons!
              wonderful team experience realizing what it takes to be in a team and many more valuable lessons!
            </p>
          </div>
        </div>
        <div className="A_B_right">
          {data.map((item, index) => (
            <Timeline key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
