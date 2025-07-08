import React, { useState } from "react";
import "./Gallary.css";

import img1 from "../assets/Gallary/IMG_8190.webp";
import img2 from "../assets/Gallary/IMG_8203.webp";
import img3 from "../assets/Gallary/IMG_8248.webp";
import img4 from "../assets/Gallary/IMG_8287.webp";
import img5 from "../assets/Gallary/IMG_8307.webp";
import img6 from "../assets/Gallary/Mulch Collection.webp";
import img7 from "../assets/Gallary/Pre-Awareness Session 2.webp";
import img8 from "../assets/Gallary/RAP  3.webp";
import img9 from "../assets/Gallary/RAP 1.webp";
import img10 from "../assets/Gallary/RAP 2.webp";
import img11 from "../assets/Gallary/RAP 3.webp";
import img12 from "../assets/Gallary/Soil Sample Collection 2.webp";
import img13 from "../assets/Gallary/Syn BS 1.webp";
import img14 from "../assets/Gallary/Syn BS 2.webp";
import img15 from "../assets/Gallary/Syn BS 3.webp";
import img16 from "../assets/Gallary/Syn BS 4.webp";
import img17 from "../assets/Gallary/unnamed.webp";
import img18 from "../assets/Gallary/Van Campaign 3.webp";
import img19 from "../assets/Gallary/AMF  bs4.webp";
import img20 from "../assets/Gallary/AMF BS 1.webp";
import img21 from "../assets/Gallary/AMF bs 2.webp";
import img22 from "../assets/Gallary/AMF bs3.webp";
import img23 from "../assets/Gallary/Farmer Awarness Sessions 3.webp";
import img24 from "../assets/Gallary/Grower Awareness Session 2.webp";
import img25 from "../assets/Gallary/Grower Awareness Session 3.webp";
import img26 from "../assets/Gallary/Grower Awareness Session 4.webp";
import img27 from "../assets/Gallary/Grower Awareness Session 5.webp";
import img28 from "../assets/Gallary/Grower Awareness Session.webp";
import img29 from "../assets/Gallary/Health Camp Health & Safety Awareness Session.webp";
import img30 from "../assets/Gallary/Health Camp PPE Kit Distribution.webp";
import img31 from "../assets/Gallary/Health Camp 1.webp";
import img32 from "../assets/Gallary/IMG_1627.webp";
import img33 from "../assets/Gallary/IMG_1629.webp";
import img34 from "../assets/Gallary/IMG_1666.webp";
import img35 from "../assets/Gallary/IMG_1683.webp";
import img36 from "../assets/Gallary/IMG_1846.webp";
import img37 from "../assets/Gallary/IMG_1859.webp";
import img38 from "../assets/Gallary/IMG_1860.webp";
import img39 from "../assets/Gallary/IMG_1924.webp";
import img40 from "../assets/Gallary/IMG_2171.webp";
import img41 from "../assets/Gallary/IMG_8121.webp";
import img42 from "../assets/Gallary/IMG_8127.webp";
import img43 from "../assets/Gallary/IMG_8128.webp";
import img44 from "../assets/Gallary/IMG_8130.webp";

const Gallary = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    img41, img42, img43, img44,
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedIndex(index)}
          >
            <img src={img} loading="lazy" alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="modal" onClick={() => setSelectedIndex(null)}>
          <span className="close">&times;</span>
          <img
            src={images[selectedIndex]}
            alt="Full view"
            className="modal-content"
          />
          <button className="prev" onClick={handlePrev}>&#10094;</button>
          <button className="next" onClick={handleNext}>&#10095;</button>
        </div>
      )}
    </div>
  );
};

export default Gallary;
