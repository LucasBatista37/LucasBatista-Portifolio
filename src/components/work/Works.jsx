import React, { useState } from "react";
import { projectsData } from "./Data";
import WorkItems from "./WorkItems";

const categories = ["todos", "web", "mobile"];

const Works = () => {
  const [projects] = useState(projectsData); 
  const [filter, setFilter] = useState("todos");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProjects =
    filter === "todos"
      ? projects 
      : projects.filter((project) => project.category === filter);

  return (
    <div>
      <div className="work__filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={filter === cat ? "active-filter" : ""}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="work__container container grid">
        {filteredProjects.map((item) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
