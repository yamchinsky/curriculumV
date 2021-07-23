import styled from "styled-components";

export const CommonContainerStyledItem = styled.div`
  display: flex;
  background-color: ghostwhite;
  background-image: url("../../images/depositphotos_3191160-stock-photo-blurry-bright-background.jpg");
  background-size: cover;
  max-width: 1240px;
  margin: 0 auto;
  box-shadow: 5px 9px 20px rgba(0, 0, 0, 0.15);
  border: 4px solid #ff092a;
  .Print-button {
    left: 550px;
    display: block;
    position: fixed;
    top: 35px;
    padding: 5px;
    border-radius: 30%;
    font-size: 20px;
    font-weight: 700;
    color: blue;
    background-color: #ffef09;
    &:hover {
      background-color: #ffef09;
      color: #ff092a;
      border: 3px solid #ff092a;
    }
  }

  @media print {
    .Print-button {
      display: none;
    }
  }
`;
