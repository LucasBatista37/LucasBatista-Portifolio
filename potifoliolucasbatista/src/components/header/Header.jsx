// Header.jsx

import React, { useState } from "react";
import "./header.css";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const changeTheme = (primaryColor, titleColor, bodyColor, textColor, containerColor) => {
        document.documentElement.style.setProperty("--primary-color", primaryColor);
        document.documentElement.style.setProperty("--title-color", titleColor);
        document.documentElement.style.setProperty("--body-color", bodyColor);
        document.documentElement.style.setProperty("--text-color", textColor);
        document.documentElement.style.setProperty("--container-color", containerColor); // Nova propriedade para o container
    };

    const closeMenu = () => {
        setToggle(false);
    };

    const themeOptions = [
        { id: 1, primaryColor: "rgba(25, 118, 210, 1)", titleColor: "rgba(51, 51, 51, 1)", bodyColor: "rgba(245, 245, 245, 1)", textColor: "#1976d2", containerColor: "rgba(245, 245, 245, 1)" }, // Azul médio
        { id: 2, primaryColor: "rgba(245, 166, 35, 1)", titleColor: "rgba(51, 51, 51, 1)", bodyColor: "rgba(245, 245, 245, 1)", textColor: "#e68a00", containerColor: "rgba(245, 245, 245, 1)" }, // Laranja mais escuro
        { id: 3, primaryColor: "rgba(255, 99, 132, 1)", titleColor: "rgba(51, 51, 51, 1)", bodyColor: "rgba(245, 245, 245, 1)", textColor: "#ff6384", containerColor: "rgba(245, 245, 245, 1)" }, // Rosa
        { id: 4, primaryColor: "rgba(0, 176, 80, 1)", titleColor: "#ffffff", bodyColor: "rgba(30, 30, 30, 1)", textColor: "#4CAF50", containerColor: "rgba(30, 30, 30, 1)" }, // Verde escuro - Modo Dark
        { id: 5, primaryColor: "rgba(186, 85, 211, 1)", titleColor: "#ffffff", bodyColor: "rgba(30, 30, 30, 1)", textColor: "#d8a8ff", containerColor: "rgba(30, 30, 30, 1)" }, // Roxo claro - Modo Dark (texto mais claro)
        { id: 6, primaryColor: "rgba(25, 25, 112, 1)", titleColor: "#ffffff", bodyColor: "rgba(30, 30, 30, 1)", textColor: "#00cec9", containerColor: "rgba(30, 30, 30, 1)" } // Modo Dark - Azul escuro
    ];

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className='nav__logo'>Lucas</a>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className='nav__link active-link'>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className='nav__link'>
                                <i className="uil uil-user nav__icon"></i>Sobre
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className='nav__link'>
                                <i className="uil uil-file-alt nav__icon"></i>Habilidades
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className='nav__link'>
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className='nav__link'>
                                <i className="uil uil-message nav__icon"></i> Contato
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => setToggle(false)}></i>
                </div>

                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>

                <div className="theme__button">
                    <button className="theme__button-toggle" onClick={() => setToggle(!toggle)}>
                        <i className="uil uil-palette"></i>
                    </button>
                    <div className={`theme__options ${toggle ? 'show-options' : ''}`}>
                        {themeOptions.map((option) => (
                            <button
                                key={option.id}
                                className="theme__option"
                                style={{ backgroundColor: option.primaryColor }}
                                onClick={() => {
                                    changeTheme(option.primaryColor, option.titleColor, option.bodyColor, option.textColor, option.containerColor);
                                    closeMenu();
                                }}
                            >
                                <i className="uil uil-check-circle"></i>
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
