import React from "react";
import { EducationStyledItem } from "./EducationStyledItem";

const EducationItem = () => {
  return (
    <EducationStyledItem class="education-container">
      <h3 class="education-title">Education:</h3>
      <div class="education-school">
        <h4 class="education-name">GoIT</h4>
        <p class="education-specialization"> Fullstack developer</p>
        <p>
          <span class="education-period">
            05.2020-08.2021 <span class="education-devider"></span>Ukraine
          </span>
        </p>
      </div>
      <div>
        <h4 class="education-name">
          National university of life and environmental sciences of Ukraine
        </h4>
        <p class="education-specialization">
          {" "}
          Master degree, Food Technology and quality control{" "}
        </p>
        <p>
          <span class="education-period">09.2009-12.2010 Ukraine</span>
        </p>
      </div>
    </EducationStyledItem>
  );
};

export default EducationItem;
