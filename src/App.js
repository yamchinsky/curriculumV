import React from "react";
import CommonContainer from "./Components/Common/CommonContainer";
import Main from "./Components/Main/Main/Main";
import ProjectsItem from "./Components/Main/Projects/ProjectsItem";
import SummaryItem from "./Components/Main/Summary/SummaryItem";
import "./index.scss";
import Aside from "./Components/SideBar/Aside/Aside";
import ContactsItem from "./Components/SideBar/Contacts/ContactsItem";
import LanguagesItem from "./Components/SideBar/Languages/LanguagesItem";
import SoftSkillsItem from "./Components/SideBar/SoftSkills/SoftSkillsItem";
import TechSkillsItem from "./Components/SideBar/TechSkills/TechSkillsItem";
import WorkItem from "./Components/Main/Work/WorkItem";
import EducationItem from "./Components/Main/Education/EducationItem";

const App = () => {
  return (
    <>
      <CommonContainer>
        <Aside>
          <ContactsItem />
          <TechSkillsItem />
          <SoftSkillsItem />
          <LanguagesItem />
        </Aside>
        <Main>
          <SummaryItem />
          <ProjectsItem />
          <WorkItem />
          <EducationItem />
        </Main>
      </CommonContainer>
    </>
  );
};

export default App;
