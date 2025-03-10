import React from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__data">
            <Data />
            <Social />
          </div>
          <div className="home__img"></div>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
