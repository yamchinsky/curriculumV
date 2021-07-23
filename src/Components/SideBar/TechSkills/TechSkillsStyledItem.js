import styled from "styled-components";

export const TechSkillsStyledItemContainer = styled.div`
  margin-bottom: 20px;

  .techskills-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 20px;
    margin-left: 10px;
    color: white;
    text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0,
      black 1px -1px 0;
    &:hover {
      color: #ffef09;
    }
  }

  .list-inline {
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-right: 20px;
  }

  .list-inline-item {
    list-style-type: none;
    flex-basis: calc(100% / 4 - 20px);
    padding: 20px;
    margin-top: -20px;
    margin-left: -20px;
  }

  .list-inline-item i {
    font-size: 48px;
    color: rgb(255, 217, 0);
    &:hover {
      color: #ff092a;
    }
  }
`;
