import React from "react";
import { WorkStyledItem } from "./WorkStyledItem";

const WorkItem = () => {
  return (
    <WorkStyledItem className="work-experience-container">
      <h2 className="work-experience-title">Work experience:</h2>
      <div className="work-experience-text">
        Since 2011 i worked as QA manager in worlwide wholesale Company METRO
        CASH and CARRY Ukraine. My main tasks were: to lead QA Operation
        function (support store operation to manage the work and to solve the
        problems in quality area). Few of last projects that was implemented and
        led by me were:
        <ul className="work-experience-list">
          <li className="work-project-item">
            <span>Traceability project</span>
            <span>
              <b>[</b> <span className="tech-name"></span> Solution to trace
              product supply chain <b>]</b>
            </span>
          </li>
          <li className="work-project-item">
            <span>Customer Issue handling solution</span>
            <span>
              <b>[</b> <span className="tech-name"></span> Data base for claims
              <b>]</b>
            </span>
          </li>
          <li className="work-project-item">
            <span>QAudit tool</span>
            <span>
              <b>[</b> <span className="tech-name"></span> Tool for internal
              audits
              <b>]</b>
            </span>
          </li>
        </ul>
      </div>
    </WorkStyledItem>
  );
};

export default WorkItem;
