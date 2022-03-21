import React from "react";
import { Main } from "./styles";
import Header from "../../components/Header/";
import contatoSupport from "../../assets/img/contatoSupport.png";
const Suporte = () => {
  return (
    <>
      <Header title="Suporte" />
      <Main>
        <div>
          <ol>
            <h1>Perguntas frequentes</h1>
            <li>
              <p>Q: Como faço para socilitar um veículo?</p>
              <p>
                A: Você só precisa entrar em sua conta e já estará na página
                certa para solicitar um veículo.
              </p>
            </li>
            <li>
              <p>Q: Como identificar o motorista?</p>
              <p>
                A: Assim que o motorista chegar ao local onde você está, ele
                fará uma ligação para que possam se encontrar.
              </p>
            </li>
            <li>
              <p>Q: Onde posso adicionar o saldo?</p>
              <p>
                A: Assim que você acessar sua conta, aperte em seu avatar e
                aparecerá um botão de saldo, lá você conseguirá adicionar os
                valores necessários.
              </p>
            </li>
          </ol>
          <span>Entre em contato: 14325-4451</span>
          <img
            onClick={() => console.log("Página de contato")}
            src={contatoSupport}
          />
          <h3>ENTRE EM CONTATO</h3>
        </div>
      </Main>
    </>
  );
};

export default Suporte;
