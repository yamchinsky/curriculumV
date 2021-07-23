import React from "react";
import { SideBarItemContainer } from "./AsideStyledItem";
import cvImg from "../../../images/photo (1).jpg";

const Aside = ({ children }) => {
  return (
    <SideBarItemContainer className="sidebar">
      <img className="cv-photo" src={cvImg} alt="" />
      {children}
    </SideBarItemContainer>
  );
};

export default Aside;
