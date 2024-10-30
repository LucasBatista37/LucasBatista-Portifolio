import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Lucas</h1>
        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">
              Sobre
            </a>
          </li>

          <li>
            <a href="#portifolio" className="footer__link">
              Projetos
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Habilidades
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/lucas_batista38?igsh=anQ5ZmY4emRleXox"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/lucas-batista-004212263/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/LucasBatista37"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>

        <p className="footer__trademark">Lucas Batista©2006-2024</p>
      </div>
    </footer>
  );
};

export default Footer;
