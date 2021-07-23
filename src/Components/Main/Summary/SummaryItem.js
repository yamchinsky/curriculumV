import React from "react";
import { SummaryStyledItemContainer } from "./SummaryStyledItem";

const SummaryItem = () => {
  return (
    <SummaryStyledItemContainer className="goal-container">
      <h2 className="goal-title">Goal:</h2>
      <p className="goal-text">
        I'am looking for interesting job as full-stack developer in friendly,
        thriving and exciting Company to develop my skills as well as grow with
        a team.
      </p>
    </SummaryStyledItemContainer>
  );
};

export default SummaryItem;
