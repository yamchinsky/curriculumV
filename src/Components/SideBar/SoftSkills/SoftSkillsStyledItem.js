import styled from "styled-components";

export const SoftSkillsStyledItemContainer = styled.div`
  margin-bottom: 20px;

  .softskills-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 20px;
    margin-left: 10px;
    color: black;

    &:hover {
      color: orangered;
    }
  }

  .softskills-item {
    margin-left: 10px;
    color: black;
    font-weight: bold;
    font-size: 22px;
    font-weight: 400;
    line-height: 24px;
    list-style: none;

    margin-bottom: 5px;
    align-items: center;
    &:hover {
      color: orangered;
    }
  }
`;
