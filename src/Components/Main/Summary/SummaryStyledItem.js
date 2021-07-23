import styled from "styled-components";

export const SummaryStyledItemContainer = styled.div`
  margin-bottom: 20px;
  max-width: 1280px;
  .goal-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
    margin-left: 10px;
    color: black;
    text-align: left;

    &:hover {
      color: orangered;
    }
  }

  .goal-text {
    color: black;
    font-weight: bold;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 400;

    margin-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    &:hover {
      color: orangered;
    }
  }
`;
