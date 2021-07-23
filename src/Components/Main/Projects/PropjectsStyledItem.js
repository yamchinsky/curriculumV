import styled from "styled-components";

export const ProjectsStyledItemContainer = styled.div`
  margin-bottom: 20px;

  .projects-item {
    list-style-type: none;
  }

  .projects-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
    margin-left: 10px;
    color: white;
    text-align: center;
    text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0,
      black 1px -1px 0;
    &:hover {
      color: #ffef09;
    }
  }
  .projects-name-first-part {
    color: white;
    font-weight: bold;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 400;
    text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0,
      black 1px -1px 0;
    margin-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    &:hover {
      color: #ffef09;
    }
  }
  .projects-name-second-part {
    color: white;
    font-weight: bold;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 400;
    text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0,
      black 1px -1px 0;
    margin-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    &:hover {
      color: #ff2e09;
    }
  }

  .projects-text {
    color: white;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 400;
    text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0,
      black 1px -1px 0;
    margin-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    &:hover {
      color: #ffef09;
    }
  }
`;
