import React from "react";
import { SummaryStyledItemContainer } from "./SummaryStyledItem";

const SummaryItem = () => {
  return (
    <SummaryStyledItemContainer className="goal-container">
      <h2 className="goal-title">Summary:</h2>
      <p className="goal-text">
        I am a FullStack developer and I am looking for a full-time position. I
        have knowledge of HTML, CSS, SCSS, JS, React, Redux etc(see more in
        TechSkills chapter). I have hands-on experience in Agile/Scrum
        methodologies. My main goal is development in programming. I am very
        responsible and ready for new challenging tasks.
      </p>
    </SummaryStyledItemContainer>
  );
};

export default SummaryItem;
