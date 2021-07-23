import React from "react";
import { MainStyledItemContainer } from "./MainStyledItem";

const Main = ({ children }) => {
  return (
    <MainStyledItemContainer className="main-info-container">
      <h1 className="name">PAVLO YAMCHINSKY</h1>
      <button className="Print-button" type="button">
        Print
      </button>
      <h1 className="work-specialization">FULL-STACK DEVELOPER</h1>
      {children}
    </MainStyledItemContainer>
  );
};

export default Main;
