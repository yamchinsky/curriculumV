import React from "react";

import cvImg from "../../images/photo (1).jpg";
import Timer from "../Timer/CountdownCircleTimer";
import { HeaderItemContainer } from "./HeaderStyledItemcontainer";

const Header = () => {
  return (
    <>
      <HeaderItemContainer className="Header">
        <img className="Header__image" src={cvImg} alt="" />
        <h1 className="Header__name">PAVLO YAMCHINSKY</h1>
        <h1 className="Header__specialization">FULL-STACK DEVELOPER</h1>
      </HeaderItemContainer>
      <div>
        <span>Сountdown to the job of my dream:</span>
        <Timer />
      </div>
    </>
  );
};

export default Header;
