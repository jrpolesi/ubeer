import styled from "styled-components";
import Fundo from "../../assets/img/backdroundCarteira.png";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F7F8F9;
    padding: 0px 20px;
    height: 66px;

    figure{
        display: flex;
        border-radius: 90px; 
        box-shadow: 1px 1px 8px #ccc;
        width: 36px;
        height: 36px;
        align-items: center;
        justify-content: center;
        opacity: 100;
    }
`;

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #F7F8F9;
    padding: 0px 20px;

    button{
        width: 85%;
        border-radius: 15px;
        cursor: pointer;
    }

    input{
        width: 45%;
        height: 40px;
        background-color: white;
        border: none;
        border-radius: 15px;
        box-shadow: 1px 1px 8px #ccc;
    }
`;

export const Section = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #FFF;
        box-shadow: 1px 1px 8px #ccc;
        padding: 20px 0px;

        figure{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        background-color: #F7F8F9;
        border-radius: 90px;
    }
    
    p{
        text-align: center;
        width: 60%;
        margin: 10px 0px;
    }

    div{
        display: flex;
        justify-content: space-between;
        width: 85%;
    }

    .QrCode{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 85%;
        height: 220px;
        background-color: #FBD50E;
        border-radius: 15px;
        margin: 20px 0px;
    }

    .QrCode img{
        width: 150px;
        height: 150px;
    }

    button{
        height: 30px;
    }

    .Adicionar{
        width: 45%;
        height: 40px;
        background-color: white;
        border: none;
        border-radius: 15px;
        box-shadow: 1px 1px 8px #ccc;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    background-color: #F7F8F9;
    padding: 0px 30px;
    margin: 20px 0px;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    p{
        font-size: 16px;
        font-weight: 500;
    }

    button{
        width: 100%;
    }
    
`;