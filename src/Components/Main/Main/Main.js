import React, { useEffect } from "react";
import { MainStyledItemContainer } from "./MainStyledItem";

const Main = ({ children }) => {
  useEffect(() => {
    window.addEventListener("click", handleButtonClick);
  });

  const handleButtonClick = (e) => {
    if (e.target.tagName !== "BUTTON") {
      return false;
    }
    window.print();
  };

  return (
    <MainStyledItemContainer className="main-info-container">
      <h1 className="name">PAVLO YAMCHINSKY</h1>
      <button
        className="Print-button"
        type="button"
        onClick={handleButtonClick}
      >
        Print
      </button>
      <h1 className="work-specialization">FULL-STACK DEVELOPER</h1>
      {children}
    </MainStyledItemContainer>
  );
};

export default Main;
