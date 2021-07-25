import styled from "styled-components";

export const SoftSkillsStyledItemContainer = styled.div`
  margin-bottom: 20px;

  .softskills-title {
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    color: black;

    &:hover {
      color: orangered;
    }
    @media screen and (min-width: 768px) {
      font-size: 20px;
      font-weight: 500;
      line-height: 17px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 32px;
      font-weight: 700;
      line-height: 24px;
    }
  }

  .softskills-item {
    margin-left: 10px;
    color: black;
    font-weight: bold;
    font-size: 16px;
    font-weight: 250;
    line-height: 16px;
    list-style: none;

    margin-bottom: 5px;
    align-items: center;
    &:hover {
      color: orangered;
    }
    @media screen and (min-width: 768px) {
      font-size: 20px;
      font-weight: 300;
      line-height: 20px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 22px;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;
