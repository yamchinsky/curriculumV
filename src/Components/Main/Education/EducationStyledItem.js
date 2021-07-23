import styled from "styled-components";

export const EducationStyledItem = styled.div`
  .education-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    margin-left: 10px;
    color: black;
    text-align: left;

    &:hover {
      color: orangered;
    }
  }
  .education-specialization {
    color: orangered;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 30px;
    padding-left: 10px;
  }

  .education-name {
    color: black;
    font-weight: bold;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 400;
    margin-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    &:hover {
      color: orangered;
    }
  }

  .education-school {
    margin-bottom: 20px;
  }

  .education-period {
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    color: black;
    font-weight: bold;
    padding-left: 10px;
  }
`;
