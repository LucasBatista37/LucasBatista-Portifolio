import React from "react";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <span className="home__scroll-name">Veja mais</span>
        <i className="uil uil-arrow-down home___scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
