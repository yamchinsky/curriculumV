import styled from "styled-components";

export const EducationStyledItem = styled.div`
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
  .education-specialization {
    color: orangered;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    padding-left: 10px;
      @media screen and (min-width: 768px) {
    font-size: 20px;
    }
    @media screen and (min-width: 1280px) {
 font-size: 30px;
    }
  }

  .education-name {
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

  .education-school {
    margin-bottom: 20px;
  }

  .education-period {
    font-size: 16px;
    font-weight: 250;
    line-height: 16px;
    color: black;
    
    padding-left: 10px;
    @media screen and (min-width: 768px) {
  font-size: 20px;
    font-weight: 300;
    line-height: 29px;
    }
    @media screen and (min-width: 1280px) {
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    }
  }
`;
