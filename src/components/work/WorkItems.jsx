import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const WorkItems = ({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.Image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <p className="work__description">{item.description}</p>
            
            <div className="work__technologies">
                {item.technologies.map((tech, index) => (
                    <span key={index} className="work__tech-tag">{tech}</span>
                ))}
            </div>
            
            <a href={item.link} className="work__button" target="_blank" rel="noopener noreferrer">
                Ver Projeto <i className="bx bx-right-arrow-alt work work__button-icon"></i>
            </a>
            <a href={item.github} className="work__button" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
            </a>
        </div>
    );
};

export default WorkItems;
