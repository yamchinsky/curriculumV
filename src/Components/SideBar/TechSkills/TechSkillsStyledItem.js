import styled from "styled-components";

export const TechSkillsStyledItemContainer = styled.div`
  margin-bottom: 20px;

  .techskills-title {
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
    font-size: 20px;
    color: rgb(20, 20, 16);
    &:hover {
      color: #ff092a;
    }
    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 48px;
    }
  }
`;
