import React from "react";
import { SummaryStyledItemContainer } from "./SummaryStyledItem";

const SummaryItem = () => {
  return (
    <SummaryStyledItemContainer className="goal-container">
      <h2 className="goal-title">Summary:</h2>
      <p className="goal-text">
        I am a FullStack developer and i am looking for a full-time position. I
        have knowledge of HTML, CSS, SCSS, JS, React, Redux etc(more in
        TechSkills chapter). Also i have hands-on experience in Agile/Scrum
        methodologies when working in a team. My main goal is to development in
        programming. I am very responsible and ready for new challenging tasks.
      </p>
    </SummaryStyledItemContainer>
  );
};

export default SummaryItem;
