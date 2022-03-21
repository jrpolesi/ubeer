import styled from "styled-components";

export const Main = styled.main`
  margin-top: 40px;

  @media (min-width: 768px){
    margin-top: 80px;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0px;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 140px;
    box-shadow: 1px 1px 8px #ccc;
    border-radius: 5px;
  }
  img{
    margin-bottom: 10px;
  }

  @media (min-width: 560px){
    div{
      width: 200px;
      height: 200px;
    }
  }

  @media (min-width: 768px){
    margin: 40px 0px;

    div{
      width: 250px;
      height: 250px;
    }
    img{
      width: 56px;
    }
  }

  @media (min-width: 1024px){
    margin: 80px 0px;

    div{
      width: 300px;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  figure{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FBD50E;
    border-radius: 90px; 
    box-shadow: 1px 1px 8px #ccc;
    width: 65px;
    height: 65px;
    cursor: pointer;
  }

  @media (min-width: 768px){
    display: none;
  }
`;