import styled from "styled-components";

export const SoftSkillsStyledItemContainer = styled.div`
  margin-bottom: 20px;

  .softskills-title {
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

  .softskills-item {
    margin-left: 10px;
    color: white;
    font-weight: bold;
    font-size: 22px;
    font-weight: 400;
    line-height: 24px;
    text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0,
      black 1px -1px 0;
    margin-bottom: 5px;
    align-items: center;
    &:hover {
      color: #ffef09;
    }
  }
`;
