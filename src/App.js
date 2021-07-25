import React from "react";

import ProjectsItem from "./Components/Main/Projects/ProjectsItem";
import SummaryItem from "./Components/Main/Summary/SummaryItem";
import "./index.scss";

import ContactsItem from "./Components/SideBar/Contacts/ContactsItem";
import LanguagesItem from "./Components/SideBar/Languages/LanguagesItem";
import SoftSkillsItem from "./Components/SideBar/SoftSkills/SoftSkillsItem";
import TechSkillsItem from "./Components/SideBar/TechSkills/TechSkillsItem";
import WorkItem from "./Components/Main/Work/WorkItem";
import EducationItem from "./Components/Main/Education/EducationItem";
import General from "./pages/General";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <>
      <div className="App">
        <General>
          <Header></Header>
          <div className="Content">
            <div className="Content__item divider">
              <ContactsItem />
              <TechSkillsItem />
              <SoftSkillsItem />
              <LanguagesItem />
            </div>
            <div className="Content__item">
              <SummaryItem />
              <ProjectsItem />
              <WorkItem />
              <EducationItem />
            </div>
          </div>
        </General>
      </div>
    </>
  );
};

export default App;
