import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div
        className="Banner-container"
        style={{
          backgroundImage:
            "url(http://velikorodnov.com/html/churhius/images/1920x980_slide2.jpg)",
        }}
      >
        <div className="banner-content">
          <h1>Lorem ipsum dolor sit amet </h1>
          <button>Find Out More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
