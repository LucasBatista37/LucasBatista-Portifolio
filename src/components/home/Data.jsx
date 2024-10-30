import React from "react";
import { BsSend } from "react-icons/bs";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Lucas Batista</h1>
      <h3 className="home__subtitle">Desenvolvedor Full Stack</h3>
      <p className="home__description">
        Desenvolvedor Full Stack focado em criar soluções tecnológicas inovadoras
        e de qualidade.
      </p>

      <a href="#contact" className="button button--flex botaocor">
        Envie uma mensagem
        <BsSend className="button__icon" size={24} />
      </a>
    </div>
  );
};

export default Data;
