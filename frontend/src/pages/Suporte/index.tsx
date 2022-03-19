import React from "react";
import { Main } from "./styled";
import Header from "../../components/Header/";
import contatoSupport from "../../assets/img/contatoSupport.png";
import { Navigate } from "react-router-dom";
const Suporte = () => {
  return (
    <>
      <Header title="Suporte" />
      <Main>
        <div>
          <ul>
            Perguntas frequentes
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only.
            </li>
          </ul>
          <a href="">Entre em contato</a>
          <img onClick={() => console.log("Página de contato")} src={contatoSupport} />
          <p>ENTRE EM CONTATO</p>
        </div>
      </Main>
    </>
  );
};

export default Suporte;
