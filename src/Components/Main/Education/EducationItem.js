import React from "react";
import { EducationStyledItem } from "./EducationStyledItem";

const EducationItem = () => {
  return (
    <EducationStyledItem className="education-container">
      <h3 className="education-title">Education:</h3>
      <div className="education-school">
        <h4 className="education-name">GoIT</h4>
        <p className="education-specialization"> Fullstack developer</p>
        <p>
          <span className="education-period">
            05.2020-08.2021 <span className="education-devider"></span>Ukraine
          </span>
        </p>
      </div>
      <div>
        <h4 className="education-name">
          National university of life and environmental sciences of Ukraine
        </h4>
        <p className="education-specialization">
          {" "}
          Master degree, Food Technology and quality control{" "}
        </p>
        <p>
          <span className="education-period">09.2009-12.2010 Ukraine</span>
        </p>
      </div>
    </EducationStyledItem>
  );
};

export default EducationItem;
