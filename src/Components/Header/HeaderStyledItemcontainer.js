import styled from "styled-components";
export const HeaderItemContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  overflow: auto;

  .Header__image {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 30%;
    width: 60px;
    height: 80px;
    &:hover {
      border: 3px solid #ff092a;
    }
    @media screen and (min-width: 768px) {
      width: 160px;
      height: 200px;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 20px;
      margin-right: 20px;
    }

    @media screen and (min-width: 1280px) {
      width: 200px;
      height: 250px;
    }
  }

  .Header__name {
    color: black;
    margin-top: 10px;
    font-size: 16px;
    @media screen and (min-width: 768px) {
      font-size: 30px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 40px;
    }
  }

  .Header__specialization {
    color: black;
    margin-top: 10px;
    font-size: 16px;

    @media screen and (min-width: 768px) {
      font-size: 25px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 30px;
    }
  }
`;
