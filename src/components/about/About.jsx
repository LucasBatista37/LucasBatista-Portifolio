import React from "react";
import { BsFileEarmarkText } from "react-icons/bs";
import "./about.css";
import AboutImg from "../../assets/sobre.jpg";
import CV from "../../assets/LucasCV.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre Mim</h2>
      <span className="section__subtitle">Introdução</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          
          <p className="about__description">
            Meu nome é Lucas, sou um Desenvolvedor Full Stack especializado em
            criar interfaces de usuário (UI) dinâmicas e intuitivas no
            front-end, enquanto implemento soluções robustas e escaláveis no
            back-end. <br />
            <br />
            No front-end, Trabalho com frameworks como{" "}
            <strong>React</strong> e <strong>Flutter</strong>, utilizando meu
            conhecimento para criar interfaces que melhoram
            a experiência do usuário. <br />
            <br />
            No back-end, utilizo <strong>Node.js</strong> para desenvolver APIs,
            permitindo integração entre diferentes componentes da aplicação.
            Além disso, tenho experiência em bancos de dados como{" "}
            <strong>MySQL</strong>, <strong>Firebase</strong> e{" "}
            <strong>MongoDB</strong>, garantindo o armazenamento eficiente dos
            dados. <br />
            <br />
          </p>

          <a download="" href={CV} className="button button--flex botaocor">
            Baixar CV
            <BsFileEarmarkText className="button__icon" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
