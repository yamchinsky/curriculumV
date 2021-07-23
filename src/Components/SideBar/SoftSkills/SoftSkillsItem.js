import React from "react";
import { SoftSkillsStyledItemContainer } from "./SoftSkillsStyledItem";

const SoftSkillsItem = () => {
  return (
    <SoftSkillsStyledItemContainer className="softskills-container">
      <h3 className="softskills-title">Soft Skills</h3>
      <ul>
        <li className="softskills-item">
          <span className="softskills-text">Responsible</span>
        </li>
        <li className="softskills-item">
          <span className="softskills-text">Proactive</span>
        </li>
        <li className="softskills-item">
          <span className="softskills-text">Team player</span>
        </li>
      </ul>
    </SoftSkillsStyledItemContainer>
  );
};

export default SoftSkillsItem;
