import styled from "styled-components";
import Map from "../../assets/img/map.png";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F7F8F9;
    padding: 0px 20px;
    height: 66px;

    figure{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 90px; 
        box-shadow: 1px 1px 8px #ccc;
        width: 46px;
        height: 36px;
    }

    h1{
        width: 100%;
        text-align: center;
        margin-right: 34px;
    }

    @media (min-width: 768px) {
    display: none;
    }
`;

export const HeaderDesktop = styled.header`
    display: none;
    align-items: center;
    justify-content: space-between;
    background-color: #FBD50E;
    padding: 0px 20px;
    height: 85px;

    figure{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFF;
        border-radius: 90px;
        box-shadow: 1px 1px 8px #00000066;
        width: 60px;
        height: 60px;
    }

    figure img{
        margin-right: 5px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        color: #FFF;
    }

    div div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 20px;
    }

    div img{
        width: 70px;
        height: 70px;
    }

    p{
        font-weight: bold;
    }
    span{

    }
    
    @media (min-width: 768px) {
    display: flex;
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
        text-align: center;
        width: 45%;
        height: 40px;
        background-color: white;
        border: none;
        border-radius: 15px;
        box-shadow: 1px 1px 8px #ccc;
    }

    @media (min-width: 768px) {
        background-image: url(${Map});
        background-size: cover;
        padding-top: 20px;
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

    @media (min-width: 450px) {
        width: 410px;
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

    @media (min-width: 450px) {
        width: 410px;
    }

    @media (min-width: 768px) {
        background-color: #f7f8f900;

        p{
        font-size: 20px;
    }
    }
    
`;

