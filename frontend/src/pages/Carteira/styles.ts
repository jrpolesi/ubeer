import styled from "styled-components";
import Fundo from "../../assets/img/backdroundCarteira.png";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F7F8F9;
    padding: 0px 25px;
    height: 66px;

    div{
        
    }
`;

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #F7F8F9;
    padding: 0px 25px;
    height: 500px;

    section{
        width: 100%;
        height: 100%;
        background-image: url(${Fundo});
        background-size: contain;
    }

    h1{
    }

    .QrCode{
        background-color: #FBD50E;
    }
`;