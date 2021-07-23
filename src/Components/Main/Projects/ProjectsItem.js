import React from "react";
import { ProjectsStyledItemContainer } from "./PropjectsStyledItem";

const ProjectsItem = () => {
  return (
    <ProjectsStyledItemContainer className="projects-container">
      <p className="projects-title">Projects experience:</p>
      <ul className="projects-list">
        <li className="projects-item">
          <a
            className="projects-name-first-part"
            href="https://svitlanaburba.github.io/Wheather-App/"
          >
            Project name -
            <span className="projects-name-second-part">Weather App</span>
          </a>
          <p className="projects-text">
            This App have: user-friendly interface, detailed weather forecast
            for up to 5 days, local time visualization with sunsets and
            sunrises, visualization of average parameters and detailed weather
            charts. With this App users able to add cities to favorite list in
            order to be aware of weather conditions at any moment.
          </p>
        </li>
      </ul>
    </ProjectsStyledItemContainer>
  );
};

export default ProjectsItem;
