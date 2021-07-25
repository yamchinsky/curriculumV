import styled from "styled-components";

export const ContactsStyledItemContainer = styled.div`
  margin-bottom: 20px;

  .contacts-title {
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

  .mobile-number-container,
  .mail-container,
  .in-container,
  .github-container {
    display: flex;
  }

  .icon {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    margin-right: 5px;
    margin-bottom: 15px;
    fill: #ffef09;
    &:hover {
      fill: #ff092a;
    }
    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
      margin-left: 20px;
    }
    @media screen and (min-width: 1280px) {
      width: 27px;
      height: 27px;
    }
  }

  .contacts-links {
    color: black;
    font-weight: bold;
    font-size: 12px;
    font-weight: 250;
    line-height: 13px;
    margin-bottom: 15px;
    align-items: center;

    &:hover {
      color: orangered;
    }
    @media screen and (min-width: 768px) {
      font-size: 18px;
      font-weight: 400;
      line-height: 15px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 22px;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;
