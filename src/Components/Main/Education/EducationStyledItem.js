import styled from "styled-components";

export const EducationStyledItem = styled.div`
  .education-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    margin-left: 10px;
    color: white;
    text-align: center;
    text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0,
      black 1px -1px 0;
    &:hover {
      color: #ffef09;
    }
  }
  .education-specialization {
    color: #ffef09;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 30px;
    text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0,
      black 1px -1px 0;
    padding-left: 10px;
  }

  .education-name {
    color: white;
    font-weight: bold;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 400;
    text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0,
      black 1px -1px 0;
    margin-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    &:hover {
      color: #ffef09;
    }
  }

  .education-school {
    margin-bottom: 20px;
  }

  .education-period {
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    color: #ffef09;
    font-weight: bold;
    padding-left: 10px;
  }
`;
