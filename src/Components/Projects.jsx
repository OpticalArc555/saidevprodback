import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";
import projectBG from "../assets/Background images/image4.jpg";

// Project 1
import photo1 from "../assets/Project 1/photo1.JPG";
import photo2 from "../assets/Project 1/photo2.JPG";
import photo3 from "../assets/Project 1/photo3.JPG";
import photo4 from "../assets/Project 1/photo4.JPG";

// Project 2
import photo11 from "../assets/project 2/photo11.JPG";
import photo12 from "../assets/project 2/photo12.JPG";
import photo13 from "../assets/project 2/photo13.JPG";
import photo14 from "../assets/project 2/photo14.JPG";

// Project 3
import farmer1 from "../assets/Project 3/farmer1.JPG";
import farmer2 from "../assets/Project 3/farmer2.JPG";
import farmer3 from "../assets/Project 3/farmer3.JPG";
import farmer4 from "../assets/Project 3/farmer4.JPG";
import farmer5 from "../assets/Project 3/farmer5.JPG";
import farmer6 from "../assets/Project 3/farmer6.JPG";
import farmer7 from "../assets/Project 3/farmer7.JPG";
import farmer8 from "../assets/Project 3/farmer8.JPG";
import farmer9 from "../assets/Project 3/farmer9.JPG";

// Project 4
import photo21 from "../assets/Project 4/photo21.jpg";
import photo22 from "../assets/Project 4/photo22.jpg";
import photo23 from "../assets/Project 4/photo23.jpg";
import photo24 from "../assets/Project 4/photo24.jpg";

// Project 5
import photo31 from "../assets/Project 5/photo31.JPG";
import photo32 from "../assets/Project 5/photo32.JPG";
import photo33 from "../assets/Project 5/photo33.JPG";
import photo34 from "../assets/Project 5/photo34.JPG";

// Project 6
import photo41 from "../assets/Project 6/photo41.JPG";
import photo42 from "../assets/Project 6/photo42.JPG";
import photo43 from "../assets/Project 6/photo43.JPG";
import photo44 from "../assets/Project 6/photo44.jpg";
import photo45 from "../assets/Project 6/photo45.jpg";
import photo46 from "../assets/Project 6/photo46.jpg";
import photo47 from "../assets/Project 6/photo47.jpg";

// Project 7
import photo51 from "../assets/Project 7/photo51.jpg";
import photo52 from "../assets/Project 7/photo52.jpg";
import photo53 from "../assets/Project 7/photo53.jpg";
import photo54 from "../assets/Project 7/photo54.jpg";
import photo55 from "../assets/Project 7/pgoto55.jpg";
import photo56 from "../assets/Project 7/photo56.jpg";
import photo57 from "../assets/Project 7/photo57.jpg";

// Project 8
import photo61 from "../assets/Project 8/photo61.jpg";
import photo62 from "../assets/Project 8/photo62.jpg";
import photo63 from "../assets/Project 8/photo63.jpg";
import photo64 from "../assets/Project 8/photo64.jpg";
import photo65 from "../assets/Project 8/photo65.jpg";
import photo67 from "../assets/Project 8/photo67.jpg";
import photo68 from "../assets/Project 8/photo68.jpg";
import photo69 from "../assets/Project 8/photo69.jpg";

// Project 9
import mulchImg1 from "../assets/Project 9/photo71.jpg";
import mulchImg2 from "../assets/Project 9/photo72.jpg";
import mulchImg3 from "../assets/Project 9/photo73.jpg";
import mulchImg4 from "../assets/Project 9/photo74.jpg";


const projects = [
  {
    title: "Baseline Survey",
    founder: "A.M Fresh (U.K)",
    implementing: "IRFT and SRDT",
    period: "2 months (2022)",
    location: "Nashik",
    description: "A survey was conducted in Nashik, Sangli, Satara and Osmanabad Districts of Maharashtra to have a first-hand account of development expectations from the grape growers, farm workers and packhouse workers.",
    images: [photo1, photo2, photo3, photo4],
  },
  {
    title: "Baseline Survey",
    founder: "Syngenta Bioscience Pvt. Ltd.",
    implementing: "IRFT and SRDT",
    period: "1 month (2022)",
    location: "Goa",
    description: "A survey was conducted in Goa to have first-hand account of the community development expectations from the community workers, SHGs, and Gram Panchayat.",
    images: [photo11, photo12, photo13, photo14],
  },
  {
    title: "Health and Safety Farmer Awareness Programme",
    founder: "Syngenta",
    implementing: "SRDT",
    period: "5 months (2022-23)",
    location: "Khargone District",
    description: "We trained 5000 farmers and 500 spray-men from Maheshwar and Bhagwanpura blocks of Khargone District, MP on farmers' health and safety while using and handling chemicals, followed by usage of Syngenta PPE kit and demonstrations. A 50-day van campaign was organized to reach maximum farmers and villagers with safety messages.",
    images: [farmer1, farmer2, farmer3, farmer4, farmer5, farmer6, farmer7, farmer8, farmer9],
  },
  {
    title: "Baseline Mapping: Management Systems and Labor Conditions",
    founder: "Patagonia",
    implementing: "IRFT and SRDT",
    period: "1 month (2023)",
    location: "Sambhajinagar",
    description: `
Mapping Objectives:
1. Chain of custody tracking and traceability for cotton-in-conversion.
2. Mapping farmer contracting, premium payments, training, and labor monitoring.
3. Understanding transition challenges to regenerative agriculture.
4. Studying verification systems and working conditions.
5. Recommendations to Patagonia.`,
    images: [photo21, photo22, photo23, photo24],
  },
  {
    title: "Syngenta Good Growth Plan",
    founder: "Syngenta",
    implementing: "SRDT & IRFT",
    period: "1 month (2023)",
    location: "Maharashtra, Gujarat and Karnataka",
    description: `
Grower training on regenerative agriculture practices (1000 growers trained).

Key Principles:
• Minimized soil disturbance
• Plants in the ground year-round
• Diversified crops
• Precision application of inputs
• Integrated livestock when possible`,
    images: [photo31, photo32, photo33, photo34],
  },
  {
    title: "Health Camp and Awareness for 400 Farmers",
    founder: "East West India Seeds Pvt. Ltd",
    implementing: "SRDT",
    period: "21st Dec 2023",
    location: "Devulgaon Raja, Maharashtra",
    description: `
Health camp, PPE kit distribution, and safety awareness session for 400 farmers.`,
    images: [photo41, photo42, photo43, photo44, photo45, photo46, photo47],
  },
  {
    title: "SAVE 3.0: Soil Health and Mulch Collection & Recycling",
    founder: "Syngenta",
    implementing: "SRDT",
    period: "1 year (2023-24)",
    location: "Devulgaon Raja, Lonar, Washim, Nanded (Maharashtra)",
    description: `
Soil Health: Soil testing of 400 growers, analysis of test reports by soil experts, and awareness sessions for growers based on recommendations.`,
    images: [photo51, photo52, photo53, photo54, photo55, photo56, photo57],
  },
  {
    title: "Health Camp and Awareness for 700 Farmers",
    founder: "East West India Seeds Pvt. Ltd",
    implementing: "SRDT",
    period: "11th Dec 2024",
    location: "Devulgaon Raja, Maharashtra",
    description: `
Health camp, PPE kit distribution, and safety awareness programme for 700 farmers held on 11th December 2024.`,
    images: [photo61, photo62, photo63, photo64, photo65, photo67, photo68, photo69],
  },
  {
    title: "Mulch Collection and Recycling",
    founder: "East West Seeds India Pvt. Ltd",
    implementing: "SRDT",
    period: "6 Months (2024-25)",
    location: "Devulgaon Raja, Lonar, Maharashtra",
    description:
      " Collection of 30MT of Mulch Waste from the Project Location and Recycling of the collected Mulch Waste through processing unit.",
    images: [mulchImg1, mulchImg2, mulchImg3, mulchImg4]
  }
];

const ongoingProjects = [
  {
    title: "S A V E 4.0 (on Soil Health and Mulch Collection and Recycling and Vermicomposting)",
    founder: "Syngenta",
    implementing: "SRDT",
    period: "1 year (2024–25)",
    location: "Devulgaon Raja, Lonar, Washim, Nanded (Maharashtra), Rajasthan and Punjab",
    description: `
Soil Health:
• Soil Testing of 350 growers.
• Analysis of test reports by soil experts.
• Awareness sessions for 650 growers based on recommendations.

Mulch Waste Collection and Recycling:
• Collection of 30MT of mulch waste from project locations.
• Recycling through processing unit.

Vermicomposting Units (Agri-enterprising model):
• Promote crop waste management via vermicomposting.
• Engage rural youth to adopt sustainable waste solutions.`,
    images: [],
  },
  {
    title: "Mulch Collection and Recycling",
    founder: "East West Seeds India Pvt. Ltd",
    implementing: "SRDT",
    period: "1 year",
    location: "Devulgaon Raja, Lonar, Maharashtra",
    description: `
Mulch Waste Collection and Recycling:
• Collection of 60 MT of mulch waste from project location.
• Recycling of collected mulch waste through processing unit.`,
    images: [],
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className="completed-projects"
      style={{
        backgroundImage: `url(${projectBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        padding: "60px 20px",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
         
          zIndex: 1,
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <h2 className="heading">Completed Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-box" key={index}>
              <Slider {...settings}>
                {project.images.map((img, i) => (
                  <div key={i}>
                    <img src={img} alt={`Slide ${i + 1}`} className="project-image" />
                  </div>
                ))}
              </Slider>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p><strong>Funder Name:</strong> {project.founder}</p>
                <p><strong>Implementing Agencies:</strong> {project.implementing}</p>
                <p><strong>Period of Intervention:</strong> {project.period}</p>
                <p><strong>Location:</strong> {project.location}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="heading" style={{ marginTop: "60px" }}>Ongoing Projects</h2>
        <div className="project-grid">
          {ongoingProjects.map((project, index) => (
            <div className="project-box" key={index}>
              <Slider {...settings}>
                {project.images.map((img, i) => (
                  <div key={i}>
                    <img src={img} alt={`Ongoing Slide ${i + 1}`} className="project-image" />
                  </div>
                ))}
              </Slider>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p><strong>Funder Name:</strong> {project.founder}</p>
                <p><strong>Implementing Agencies:</strong> {project.implementing}</p>
                <p><strong>Period:</strong> {project.period}</p>
                <p><strong>Location:</strong> {project.location}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
