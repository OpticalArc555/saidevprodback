import React from 'react';
import './Blog.css';
import bgImage from '../assets/Blog/image.png'; // Adjust path if needed

const Blog = () => {
  return (
    <div
      className="blog-wrapper"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="blog-overlay">
         <h1>Coming Soon...</h1>
      </div>
    </div>
  );
};

export default Blog;
