import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { DiJavascript1, DiGit, DiMysql, DiMongodb } from "react-icons/di";
import { SiCss3, SiFirebase, SiFlutter, SiHtml5, SiJavascript } from "react-icons/si"; 
import './skills.css';

const skillsData = [
  { name: "HTML", icon: <SiHtml5 />, color: "#e34c26" },
  { name: "CSS", icon: <SiCss3 />, color: "#264de4" },
  { name: "Javascript", icon: <SiJavascript />, color: "#f0db4f" },
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
  { name: "MySQL", icon: <DiMysql />, color: "#00758F" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "MongoDB", icon: <DiMongodb />, color: "#4DB33D" },
];

const Skills = () => {
  return (
    <section className="skills__section" id="skills">
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Tecnologias que trabalho</span>

      <div className="skills__container container grid">
        {skillsData.map((skill, index) => (
          <div
          className="skills__card"
          key={index}
          style={{ "--hover-color": skill.color }}
        >
          <div className="skills__icon">{skill.icon}</div>
          <h3 className="skills__name">{skill.name}</h3>
        </div>        
        ))}
      </div>
    </section>
  );
};

export default Skills;
