import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;  
  margin-top: 20px;

`;

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 20px 20px;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 140px;
    box-shadow: 1px 1px 20px #ccc;
    border-radius: 15px;
    cursor: pointer;
  }

  div:hover{
    box-shadow: 1px 1px 8px #ccc;
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
    margin: 80px 0px 20px 0px;

    div{
      width: 300px;
    }
  }
`;

export const SectionContainer = styled.section`

  @keyframes animation{
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }

  position: fixed;
  width: 80%;
  max-width: 560px;
  background-color: #FFF;
  box-shadow: 1px 1px 20px #ccc;
  border-radius: 15px;
  padding: 20px;
  animation-name: animation;
  animation-duration: 1s;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  div button {
    width: 30px;
    height: 30px;
    border: none;
    background-color: #FFF;
    color: #FBD50E;
    box-shadow: 1px 1px 20px #ccc;
    border-radius: 90px;
    font-weight: bold;
    animation-name: animation;
    animation-duration: 1.5s;
    cursor: pointer;
  }

  div button:hover{
    box-shadow: 1px 1px 8px #ccc;
  }

  form div{
    width: 100%;
    margin: 10px 0px;
    animation-name: animation;
    animation-duration: 1.5s;
  }

  form button{
    width: 100%;
    margin-top: 20px;
    animation-name: animation;
    animation-duration: 1.5s;
  }

  li{
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #FBD50E;
    border-radius: 15px;
    padding: 0px 20px;
    margin: 20px 0px;
    animation-duration: 1.5s;
    cursor: pointer;
  }

  aside{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    animation-duration: 1.5s;
  }

  aside p {
    font-size: 22px;
    font-weight: bold;
  }

  figure{
    width: 200px;
    height: 200px;
    margin-top: 10px;
    
  }
  figure img{
    width: 100%;
    animation-duration: 2s;
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