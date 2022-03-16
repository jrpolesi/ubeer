import React from "react";
import Logo from "../../assets/img/logo.png";
import Motorista from "../../assets/img/imagemSobre.png";
import Gabriel from "../../assets/img/Gabriel.jpeg";
import Monalisa from "../../assets/img/Monalisa.jpeg";
import Jose from "../../assets/img/Jose.jpeg";
import Carlos from "../../assets/img/Carlos.jpeg";
import Robert from "../../assets/img/Robert.png";
import { Button, Nav } from "grommet";
import { Github, Linkedin } from "grommet-icons";
import {
  ButtonFooter,
  Header,
  LogoSection,
  Main,
  SobreArticle,
  TimeSection,
} from "./styles";

const Sobre = () => {
  return (
    <>
      <Header>
        <div>
          <figure>
            <img src={Logo} alt="Logo" />
          </figure>
          <h3>uBeer</h3>
        </div>
        <Nav direction="row">
          <Button primary label="Entrar" color="light-1" />
          <Button primary label="Cadastre-se" color="light-1" />
        </Nav>
      </Header>
      <Main>
        <LogoSection>
          <div>
            <figure id="logo">
              <img src={Logo} alt="Logo da uBeer" />
            </figure>
            <h1 id="mobile">uBeer</h1>
            <h1 id="desktop">Bem vindo a uBeer!</h1>
          </div>
        </LogoSection>
        <SobreArticle>
          <h2>Sobre a uBeer</h2>
          <div>
            <figure>
              <img src={Motorista} alt="Motorista dirigindo bebado" />
            </figure>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only.
            </p>
          </div>
        </SobreArticle>
        <TimeSection>
          <h2>Nosso time</h2>
          <div>
            <figure>
              <img src={Gabriel} />
            </figure>
            <div className="container">
              <p>Gabriel Castedo</p>
              <span>Product Owner</span>
              <div className="links">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div>
            <figure>
              <img src={Monalisa} />
            </figure>
            <div className="container">
              <p>Monalisa Menezes</p>
              <span>Scrum Master</span>
              <div className="links">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div>
            <figure>
              <img src={Jose} />
            </figure>
            <div className="container">
              <p>José Kremer</p>
              <span>Tech Lead</span>
              <div className="links">
                <a
                  href="https://github.com/jrpolesi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/jose-ricardo-kremer-polesi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div>
            <figure>
              <img src={Carlos} />
            </figure>
            <div className="container">
              <p>Carlos Vitor</p>
              <span>Quality Assurance</span>
              <div className="links">
                <a
                  href="https://github.com/Carlosv117"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/carlos-vitor-ribeiro-cerqueira-lima-08aa78212/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div>
            <figure>
              <img src={Robert} />
            </figure>
            <div className="container">
              <p>Robert Costa</p>
              <span>Quality Assurance</span>
              <div className="links">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </TimeSection>
      </Main>
      <ButtonFooter>
        <Button
          primary
          label="LOG IN"
          color="accent-4"
          style={{ borderRadius: 6 }}
          size="small"
          // onClick={() => history.push("/login")}
        />
        <Button
          primary
          label="CADASTRE-SE"
          style={{ borderRadius: 6 }}
          size="small"
          color="dark-1"
          // onClick={() => history.push("/signup")}
        />
      </ButtonFooter>
    </>
  );
};

export default Sobre;
