import styled from "styled-components";

export const WorkStyledItem = styled.div`
  margin-bottom: 20px;

  .work-experience-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
    margin-left: 10px;
    color: black;
    text-align: left;

    &:hover {
      color: orangered;
    }
  }

  .work-experience-text {
    color: black;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 400;

    margin-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    list-style-type: none;
    &:hover {
      color: orangered;
    }
  }

  .work-project-item {
    color: black;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
    font-weight: 400;

    margin-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    list-style-type: none;
    &:hover {
      color: #ff092a;
    }
  }
`;
