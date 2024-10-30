import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData); 
  }, []);

  return (
    <div>
      <div className="work__container container grid">
        {projects.map((item) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
