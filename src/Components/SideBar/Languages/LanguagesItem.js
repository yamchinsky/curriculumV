import React from "react";
import { LanguagesStyledItemContainer } from "./LanguagesStyledItem";

const LanguagesItem = () => {
  return (
    <LanguagesStyledItemContainer className="hardskills-container">
      <h3 className="hardskills-title">Languages</h3>
      <ul>
        <li className="hardskills-item">
          English-Upper-Intermediate
          <br />
        </li>
        <li className="hardskills-item">
          <span className="hardskills-text">French-Intermediate</span>
          <br />
        </li>
        <li className="hardskills-item">
          <span className="hardskills-text">Ukrainian-native</span>
          <br />
        </li>
        <li className="hardskills-item">
          <span className="hardskills-text">Russian-fluent</span>
          <br />
        </li>
      </ul>
    </LanguagesStyledItemContainer>
  );
};

export default LanguagesItem;
