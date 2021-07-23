import React from "react";
import { CommonContainerStyledItem } from "./CommonContainerStyledItem";

const CommonContainer = ({ children }) => {
  return (
    <CommonContainerStyledItem className="wrapper">
      {children}
    </CommonContainerStyledItem>
  );
};

export default CommonContainer;
