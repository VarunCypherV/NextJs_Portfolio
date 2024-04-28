"use client";

import React, { useState , useEffect} from "react";
import Card from "./Card";

const data = [
  {
    cardC1Img: "/Assets/Work/Card/em.png",
    title: "ELEMENTAL MARKETPLACE",
    description: "An Ecommerce Website With a Unique Theme and Concept",
    features: ["Strapi CMS", "Password hashed in mongodb", "Payment Gateway"],
    icons: ["figma", "gatsby", "mongodb", "nodejs"],
    additionalIcons: ["github", "deploy"],
  },
  {
    cardC1Img: "/Assets/Work/Card/em.png",
    title: "ELEMENTAL MARKETPLACE",
    description: "An Ecommerce Website With a Unique Theme and Concept",
    features: ["Strapi CMS", "Password hashed in mongodb", "Payment Gateway"],
    icons: ["figma", "gatsby", "mongodb", "nodejs"],
    additionalIcons: ["github", "deploy"],
  },
  {
    cardC1Img: "/Assets/Work/Card/em.png",
    title: "ELEMENTAL MARKETPLACE",
    description: "An Ecommerce Website With a Unique Theme and Concept",
    features: ["Strapi CMS", "Password hashed in mongodb", "Payment Gateway"],
    icons: ["figma", "gatsby", "mongodb", "nodejs"],
    additionalIcons: ["github", "deploy"],
  },
  {
    cardC1Img: "/Assets/Work/Card/em.png",
    title: "ELEMENTAL MARKETPLACE",
    description: "An Ecommerce Website With a Unique Theme and Concept",
    features: ["Strapi CMS", "Password hashed in mongodb", "Payment Gateway"],
    icons: ["figma", "gatsby", "mongodb", "nodejs"],
    additionalIcons: ["github", "deploy"],
  },
  {
    cardC1Img: "/Assets/Work/Card/em.png",
    title: "ELEMENTAL MARKETPLACE",
    description: "An Ecommerce Website With a Unique Theme and Concept",
    features: ["Strapi CMS", "Password hashed in mongodb", "Payment Gateway"],
    icons: ["figma", "gatsby", "mongodb", "nodejs"],
    additionalIcons: ["github", "deploy"],
  },
  {
    cardC1Img: "/Assets/Work/Card/em.png",
    title: "ELEMENTAL MARKETPLACE",
    description: "An Ecommerce Website With a Unique Theme and Concept",
    features: ["Strapi CMS", "Password hashed in mongodb", "Payment Gateway"],
    icons: ["figma", "gatsby", "mongodb", "nodejs","ML"],
    additionalIcons: ["github", "deploy"],
  },
  {
    cardC1Img: "/Assets/Work/Card/em.png",
    title: "ELEMENTAL MARKETPLACE",
    description: "An Ecommerce Website With a Unique Theme and Concept",
    features: ["Strapi CMS", "Password hashed in mongodb", "Payment Gateway"],
    icons: ["aws"],
    additionalIcons: ["github", "deploy"],
  },{
    cardC1Img: "/Assets/Work/Card/em.png",
    title: "ELEMENTAL MARKETPLACE",
    description: "An Ecommerce Website With a Unique Theme and Concept",
    features: ["Strapi CMS", "Password hashed in mongodb", "Payment Gateway"],
    icons: ["aws"],
    additionalIcons: ["github", "deploy"],
  },
];

function FilterCarosel() {
  const [filteredData, setFilteredData] = useState(data);
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const sleep = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000); // Resolve after 1000 milliseconds (1 second)
    });
  };

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setFade(false);
    }, 10); // Adjust this timeout according to your CSS transition duration
    return () => clearTimeout(timeout);
  }, [filteredData]);
  
  const filterByWeb = async () => {
    const filtered = data.filter((item) =>
      ["react", "gatsby", "nodejs", "next", "flask", "mongodb"].some((icon) =>
        item.icons.includes(icon)
      )
    );
    setFade(true);
    sleep()
    setFilteredData(filtered);
  };

  const filterByUIUX = async () => {
    const filtered = data.filter((item) => item.icons.includes("figma"));
    setFade(true);
    await sleep()
    setFilteredData(filtered);
  };

  const filterByDataScience =  async () => {
    const filtered = data.filter((item) =>
    ["python", "ML"].some((icon) => item.icons.includes(icon))
  );
  setFade(true);
  await sleep()
  setFilteredData(filtered);
  };

  const filterByDevOps = async () => {
    const filtered = data.filter((item) =>
      ["vagrant", "aws"].some((icon) => item.icons.includes(icon))
    );
    setFade(true);
    await sleep()
    setFilteredData(filtered);
  };

  const resetFilters = async () => {
    setFade(true);
    await sleep()
    setFilteredData(data);
  };
  

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 > filteredData.length - 4 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 < 0 ? filteredData.length - 4 : prevIndex - 1
    );
  };

  return (
    <div className="FC_Parent">
      {/* Filter options */}
      <div className="FC_Filter_Parent">
        <div className="FC_Child" onClick={filterByWeb}>
          <img src="/Assets/Work/Filtericon.png" alt="Filter Icon" />
          <p>WEB</p>
        </div>
        <div className="FC_Child" onClick={filterByUIUX}>
          <img src="/Assets/Work/Filtericon.png" alt="Filter Icon" />
          <p>UI/UX</p>
        </div>
        <div className="FC_Child" onClick={filterByDataScience}>
          <img src="/Assets/Work/Filtericon.png" alt="Filter Icon" />
          <p>DATA SCIENCE</p>
        </div>
        <div className="FC_Child" onClick={filterByDevOps}>
          <img src="/Assets/Work/Filtericon.png" alt="Filter Icon" />
          <p>DEVOPS</p>
        </div>
        <div className="FC_Child" onClick={resetFilters}>
          <img src="/Assets/Work/Filtericon.png" alt="Filter Icon" />
          <p>RESET</p>
        </div>
      </div>

      {/* Carousel */}
      <div className="FC_Carousel">
        <div
          className={`FC_CardContainer ${fade ? "fade-out" : "fade-in"}`}
          style={{
            transform: filteredData.length > 4 ? `translateX(${-startIndex * 25}%)` : `translateX(${0}%)`
          }}
        >
          {filteredData.map((item, index) => (
            <div key={index} className={`FC_Card`}>
              <Card data={item} />
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <div className="FC_ButtonContainer">
          <button className="FC_PrevBtn" onClick={handlePrev}>
            <img src="/Assets/Work/Card/arrow2.png" alt="Previous" />
          </button>
          <button className="FC_NextBtn" onClick={handleNext}>
            <img src="/Assets/Work/Card/arrow1.png" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterCarosel;