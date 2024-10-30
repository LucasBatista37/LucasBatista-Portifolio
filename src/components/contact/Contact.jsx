import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsSend } from "react-icons/bs";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9cr7r48", "template_s3uk90d", form.current, {
        publicKey: "sYeK_oHWmE34BO883",
      })
      .then(
        (result) => {
          setSuccessMessage(true);
          setTimeout(() => setSuccessMessage(false), 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Entre em contato</h2>
      <span className="section__subtitle">Contate-me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Fale comigo</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                lucas.batista9734@gmail.com
              </span>
              <a
                href="mailto:lucas.batista9734@gmail.com"
                className="contact__button"
              >
                Contate-me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">(13)996830085</span>
              <a
                href="https://wa.me/5513996830085?text=Olá, gostaria de falar com você!"
                className="contact__button"
              >
                Contate-me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">Lucas Batista</span>
              <a
                href="https://www.linkedin.com/in/lucas-batista-004212263/"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contate-me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Escreva sobre seu projeto</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="name" className="contact__form-tag">
                Nome
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insira o seu nome"
                required
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insira o seu email"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="project" className="contact__form-tag">
                Projeto
              </label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Escreva sobre seu projeto"
                required
              ></textarea>
            </div>

            {successMessage && (
              <p className="success-message">Mensagem enviada com sucesso!</p>
            )}

            <button className="button button--flex">
              Mande mensagem <BsSend className="button__icon" size={24} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
