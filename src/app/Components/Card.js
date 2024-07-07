"use client";
import Link from "next/link";
import React from "react";

const iconUrlMap = {
  reactjs: "/Assets/Work/Card/react.png",
  reactnative: "/Assets/Work/Card/react.png",
  nextjs: "/Assets/Work/Card/next.png",
  nodejs: "/Assets/Work/Card/nodejs.png",
  express: "/Assets/Work/Card/express.png",
  mongodb: "/Assets/Work/Card/mongodb.png",
  mysql: "/Assets/Work/Card/mysql.png",
  flask: "/Assets/Work/Card/flask.png",
  firebase: "/Assets/Work/Card/firebase.png",
  php: "/Assets/Work/Card/php.png",
  figma: "/Assets/Work/Card/figma.png",
  vagrant: "/Assets/Work/Card/vagrant.png",
  webflow: "/Assets/Work/Card/wbco.jpg",
  aws: "/Assets/Work/Card/aws.png",
  github: "/Assets/Work/Card/github.png",
  gatsby: "/Assets/Work/Card/gatsby.png",
  deploy: "/Assets/Work/Card/eye.png",
  selenium: "/Assets/Work/Card/seb.png",
  html:"/Assets/Work/Card/html.png",
  css:"/Assets/Work/Card/css.png",
  js:"/Assets/Work/Card/js.png",
  python:"/Assets/Work/Card/python.png",
  google:"/Assets/Work/Card/google.png",
  flutter:"/Assets/Work/Card/flutter.png",
  space: "",
};

function Card({ data }) {
  return (
    <div className="Card_Parent">
      <div className="CardC1">
        <img src={data.cardC1Img} alt="CardC1 Image" />
      </div>
      <div className="CardC2">
        <div className="CardC2_Content">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <ul className="features-list">
            {data.features.map((feature, index) => (
              <li key={index}>
                <img src="/Assets/Work/Card/tick.png" alt="Feature Icon" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="CardC2_Icons">
          <>
            {data.icons.map((icon, index) => {
              if (icon === "") {
                return (
                  <div key={index}>
                    <br />
                    <br />
                  </div>
                );
              } else {
                return (
                  <div className="Icons" key={index}>
                    <img src={iconUrlMap[icon]} alt={`${icon} Icon`} />
                  </div>
                );
              }
            })}
          </>
          <div className="Additional">
            {data.additionalIcons.map((icon, index) => {
              const url = icon === "github" ? data.github : data.deployment;
              const iconClass = url === "" ? "icon-red" : "icon-black";
              const clickable = url === "" ? "unclickable" : "clickable";
              return (
                <Link key={index} href={url} class={clickable}>
                  <img
                    className={iconClass}
                    src={iconUrlMap[icon]}
                    alt={`${icon} Icon`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
