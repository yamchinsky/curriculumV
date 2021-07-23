import styled from "styled-components";

export const CommonContainerStyledItem = styled.div`
  max-width: 1280px;
  display: flex;
  background-color: #c4fff7;
  box-shadow: 5px 9px 20px rgba(0, 0, 0, 0.15);
  margin-left: auto;
  margin-right: auto;
  border: solid 1px red;

  .Print-button {
    top: 20px;
    display: block;
    position: inherit;
    margin-left: 450px;
    padding: 5px;
    border-radius: 30%;
    font-size: 20px;
    font-weight: 700;
    color: black;
    background-color: bisque;
    color: #ff092a;
    border: 3px solid #ff092a;
    &:hover {
      background-color: yellow;
    }
  }

  @media print {
    .Print-button {
      display: none;
    }
  }
`;
