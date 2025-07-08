import React from "react";
import './About.css'; 
import { motion } from "framer-motion";
import bgImage from "../assets/Background images/image1.png"; 
import growerImg from "../assets/About/Grower Awareness Session 4.jpg"; 

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const About = () => {
  return (
    <motion.div
      className="about-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="about-header" variants={fadeUp}>
        <h1>About Us</h1>
        <p>Empowering rural communities through sustainable development</p>
      </motion.div>

      <motion.div className="about-section" variants={fadeUp}>
        <motion.img 
          src={growerImg} 
          alt="Sai Rural Development Trust" 
          whileHover={{ scale: 1.03 }} 
          transition={{ duration: 0.3 }} 
        />
      </motion.div>

      <motion.div className="who-we-are-block" variants={fadeUp}>
        <h2>Who We Are</h2>
        <p>
          Sai Rural Development Trust (SRDT), established under the Mumbai Public Trust Act, 1950, has been working tirelessly in the sector for several years.
          We dedicate our efforts to improving the lives of Farmers, Farm Workers, Communities and Women SHG’s through various development projects.
        </p>
        <p>
          We bring a wealth of experience in Project Planning & Execution across various sectors, Capacity Building, Training, and comprehensive Baseline Study/Needs Assessment.
          Our team is dedicated to ensuring the success of our initiatives and making a tangible difference in the lives of those we serve.
        </p>
      </motion.div>

      <div className="about-cards">
        {[{
            title: "Our Vision",
            desc: "To provide resources and opportunities to underprivileged individuals, groups, and communities, empowering them to live with dignity and become active, contributing members of our society."
          },
          {
            title: "Our Mission",
            desc: "We strive to be the foundation for social change and inclusion, fostering the social development and integration of underprivileged individuals, groups, and communities."
        }].map((card, idx) => (
          <motion.div className="card" key={idx} variants={fadeUp}>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div className="about-values" variants={fadeUp}>
        <h2 className="our">Our Core Values</h2>
        <div className="value-tags">
          {[
            "Responsibility",
            "Accountability",
            "Transparency",
            "Innovation",
            "Equality",
            "Participation",
            "Creativity",
          ].map((val) => (
            <motion.span key={val} whileHover={{ scale: 1.1 }}>{val}</motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div className="chairman-message" variants={fadeUp}>
        <h2>Message from the Chairman</h2>
        <p>
          I strongly believe that it’s our duty and responsibility to give back to the society in which we live. Our team's unwavering dedication and support have enabled us to make a positive impact on countless lives.
          Together, we are building a brighter future for all.
        </p>
        <p><strong>– Mr. Ram Santram Mise, Chairman, Sai Rural Development Trust</strong></p>
      </motion.div>
    </motion.div>
  );
};

export default About;
