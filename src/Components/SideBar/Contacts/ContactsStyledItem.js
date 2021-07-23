import styled from "styled-components";

export const ContactsStyledItemContainer = styled.div`
  margin-bottom: 20px;
  .contacts-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 20px;
    margin-left: 20px;
    color: black;

    &:hover {
      color: orangered;
    }
  }

  .mobile-number-container,
  .mail-container,
  .in-container,
  .github-container {
    display: flex;
  }

  .icon {
    width: 27px;
    height: 27px;
    margin-left: 20px;
    margin-right: 5px;
    margin-bottom: 15px;
    fill: #ffef09;
    &:hover {
      fill: #ff092a;
    }
  }

  .contacts-links {
    color: black;
    font-weight: bold;
    font-size: 22px;
    font-weight: 400;
    line-height: 24px;

    margin-bottom: 15px;
    align-items: center;
    &:hover {
      color: orangered;
    }
  }
`;
