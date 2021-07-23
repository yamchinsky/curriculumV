import React from "react";
import { WorkStyledItem } from "./WorkStyledItem";

const WorkItem = () => {
  return (
    <WorkStyledItem className="work-experience-container">
      <h2 className="work-experience-title">Work experience:</h2>
      <div className="work-experience-text">
        <b>POSITION : </b> QA manager at METRO CASH AND CARRY <br />
        august 2011 - may 2020 <br />
        <b>RESPONSIBILITIES :</b> <br />
        QS development and integration in stores, certification, managing of
        internal audit direction <br />
        Few of last projects that was implemented and led by me were:
        <ul className="work-experience-list">
          <li className="work-project-item">
            <span>Traceability project</span>
            <span>
              <span className="tech-name"></span> Solution to trace product
              supply chain <b></b>
            </span>
          </li>
          <li className="work-project-item">
            <span>Customer Issue handling solution</span>
            <span>
              <span className="tech-name"></span> Data base for claims
              <b></b>
            </span>
          </li>
          <li className="work-project-item">
            <span>QAudit tool</span>
            <span>
              <span className="tech-name"></span> Tool for internal audits
              <b></b>
            </span>
          </li>
        </ul>
      </div>
    </WorkStyledItem>
  );
};

export default WorkItem;
