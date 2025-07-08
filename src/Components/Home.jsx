import React, { useEffect, useState } from "react";
import photo1 from "../assets/Home/photo1.jpeg";
import photo2 from "../assets/Home/photo2.jpeg";
import photo3 from "../assets/Home/photo3.jpeg";
import photo4 from "../assets/Home/photo4.jpeg";
import photo5 from "../assets/Home/photo5.jpeg";
import photo6 from "../assets/Home/photo6.jpeg";

import agri from "../assets/interest/Agriculture Development.jpg";
import baseline from "../assets/interest/Baseline Survey , Needs Assessments.png";
import education from "../assets/interest/Education.jpg";
import environment from "../assets/interest/Environment.jpg";
import health from "../assets/interest/Health and Nutrition.jpg";
import infra from "../assets/interest/Infrastructure Development.jpg";
import rural from "../assets/interest/Rural Development.jpg";
import livelihood from "../assets/interest/Sustainable Livelihood.png";
import training from "../assets/interest/Training and Capacity Building.jpg";
import waste from "../assets/interest/Waste Management.jpg";
import water from "../assets/interest/Water Development.jpg";
import women from "../assets/interest/Women Empowerment.jpg";

import interestBanner from "../assets/Home/image.png"; // ✅ Banner Image

import "./Home.css";

const images = [photo1, photo2, photo3, photo4, photo5, photo6];

const interests = [
  { img: agri, title: "Agriculture Development" },
  { img: baseline, title: "Baseline Survey & Needs Assessments" },
  { img: education, title: "Education" },
  { img: environment, title: "Environment" },
  { img: health, title: "Health & Nutrition" },
  { img: infra, title: "Infrastructure Development" },
  { img: rural, title: "Rural Development" },
  { img: livelihood, title: "Sustainable Livelihood" },
  { img: training, title: "Training & Capacity Building" },
  { img: waste, title: "Waste Management" },
  { img: water, title: "Water Development" },
  { img: women, title: "Women Empowerment" },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="slideshow">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`slide ${index === current ? "active" : ""}`}
          />
        ))}
      </div>

      <section className="interest-section">
        <h2>Area of Interest</h2>
        <div className="interest-grid">
          {interests.map((item, index) => (
            <div className="interest-box" key={index}>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Image AFTER Interest Section */}
      <div className="interest-banner">
        <img src={interestBanner} alt="Interest Related Banner" />
      </div>
    </div>
  );
};

export default Home;
