import React from "react";
import Header from "../../components/Header";
import { Footer, Main, Section } from "./styles";
import Conta from "../../assets/img/iconConta.png";
import Favoritos from "../../assets/img/iconFavoritos.png";
import Suporte from "../../assets/img/iconSuporte.png";
import Cancel from "../../assets/img/iconCancel.png";
import { useNavigate } from "react-router-dom";

const Preferences = () => {

  const navigate = useNavigate();

  return(
    <>
      <Header title="Preferências"/>

      <Main>
        <Section>
          <div>
            <img src={Conta} alt="Conta" />
            <p>Conta</p>
          </div>
          <div>
            <img src={Favoritos} alt="Favoritos" />
            <p>Favoritos</p>
          </div>
        </Section>
        <Section>
          <div>
            <img src={Conta} alt="Agendamentos" />
            <p>Histórico</p>
          </div>
          <div onClick={() => navigate("/suport")}>
            <img src={Suporte} alt="Suporte" />
            <p>Suporte</p>
          </div>
        </Section>
      </Main>
      <Footer>
        <figure onClick={() => navigate(-1)}>
          <img src={Cancel} alt="Botão para voltar" />
        </figure>
      </Footer>

    </>
  );
};

export default Preferences;