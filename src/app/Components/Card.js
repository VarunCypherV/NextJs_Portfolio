"use client";
import React from "react";


const iconUrlMap = {
  react: "/Assets/Work/Card/react.png",
  next: "/Assets/Work/Card/next.png",
  nodejs: "/Assets/Work/Card/nodejs.png",
  express: "/Assets/Work/Card/express.png",
  mongodb: "/Assets/Work/Card/mongodb.png",
  mysql: "/Assets/Work/Card/mysql.png",
  flask: "/Assets/Work/Card/flask.png",
  firebase: "/Assets/Work/Card/firebase.png",
  php: "/Assets/Work/Card/php.png",
  figma: "/Assets/Work/Card/figma.png",
  vagrant: "/Assets/Work/Card/vagrant.png",
  aws: "/Assets/Work/Card/aws.png",
  github: "/Assets/Work/Card/github.png",
  gatsby: "/Assets/Work/Card/gatsby.png",
  deploy: "/Assets/Work/Card/eye.png"
};

function Card({data}) {
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
        {data.icons.map((icon, index) => (
           <div className="Icons">
             <img key={index} src={iconUrlMap[icon]} alt={`${icon} Icon`} />
           </div>
          ))}
        </>
          
          <div class="Addtional">
            {data.additionalIcons.map((icon, index) => (
              <img key={index} src={iconUrlMap[icon]} alt={`${icon} Icon`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;



