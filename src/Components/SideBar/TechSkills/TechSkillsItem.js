import React from "react";
import { TechSkillsStyledItemContainer } from "./TechSkillsStyledItem";

const TechSkillsItem = () => {
  return (
    <TechSkillsStyledItemContainer className="techskills-container">
      <h3 className="techskills-title">Tech Skills</h3>
      <ul className="list-inline">
        <li className="list-inline-item">
          <i className="devicons devicon-html5-plain-wordmark"></i>
        </li>
        <li className="list-inline-item">
          <i className="devicons devicon-javascript-plain"></i>
        </li>
        <li className="list-inline-item">
          <i className="devicon-css3-plain-wordmark"></i>
        </li>
        <li className="list-inline-item">
          <i className="devicons devicon-sass-original"></i>
        </li>
        <li className="list-inline-item">
          <i className="devicons devicon-react-original-wordmark"></i>
        </li>
        <li className="list-inline-item">
          <i className="devicons devicon-redux-original"></i>
        </li>
        <li className="list-inline-item">
          <i className="devicons devicon-npm-original-wordmark"></i>
        </li>
        <li className="list-inline-item">
          <i className="devicons devicon-git-plain-wordmark"></i>
        </li>
        <li className="list-inline-item">
          <i className="devicons devicon-webpack-plain-wordmark"></i>
        </li>
        <li className="list-inline-item">
          <i className="devicons devicon-figma-plain"></i>
        </li>
      </ul>
    </TechSkillsStyledItemContainer>
  );
};

export default TechSkillsItem;
