import React from "react";
import { ProjectsStyledItemContainer } from "./ProjectsStyledItem";

const ProjectsItem = () => {
  return (
    <ProjectsStyledItemContainer className="projects-container">
      <p className="projects-title">Projects experience:</p>
      <ul className="projects-list">
        <li className="projects-item">
          <a
            className="projects-name-first-part"
            href="https://slim-mom-react-project.vercel.app/"
          >
            <b>Project name -</b>
            <span className="projects-name-second-part">Slim mom APP</span>
          </a>
          <p className="projects-text">
            {" "}
            <b>TECHNOLOGIES: </b>React, Redux Tool kit, GIT, Axios, REST API,
            FORMIK, yup.js, lazyLoad, JS, HTML, CSS{" "}
          </p>
          <p className="projects-text">
            Based on user characteristics this APP gives daily kcal norm and not
            allowed for consumption products also APP contain calculator and
            diary with possibility to check whether your daily kcal norm not
            exceed.
          </p>
        </li>
        <li className="projects-item">
          <a
            className="projects-name-first-part"
            href="https://svitlanaburba.github.io/Wheather-App/"
          >
            <b>Project name -</b>
            <span className="projects-name-second-part">Weather App</span>
          </a>
          <p className="projects-text">
            {" "}
            <b>TECHNOLOGIES: </b>JS, HTML, CSS, HANDLEBARS, GIT, AXIOS, REST
            API, SIEMA, CHART.js{" "}
          </p>
          <p className="projects-text">
            This App have detailed weather forecast for up to 5 days, local time
            visualization with sunsets and sunrises, visualization of average
            parameters and detailed weather charts
          </p>
        </li>
      </ul>
    </ProjectsStyledItemContainer>
  );
};

export default ProjectsItem;
