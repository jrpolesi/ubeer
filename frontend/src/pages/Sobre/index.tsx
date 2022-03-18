import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
          <Button primary label="Entrar" color="light-1" onClick={() => navigate("/login")}/>
          <Button primary label="Cadastre-se" color="light-1" onClick={() => navigate("/Signup")}/>
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
              Todos os anos morrem milhares de pessoas no trânsito devido ao
              consumo irresponsável de bebidas alcoólicas. Com o intuito de
              reduzir o número de mortes no trânsito, nossa aplicação permite
              que alguém que tenha saído com o seu próprio carro, e acabou
              ingerindo bebidas alcoólicas, possa chamar um de nossos motoristas
              altamente capacitados para buscar o usuário e seu veículo, e levar
              os dois em segurança para casa. Com nosso aplicativo acreditamos
              que podemos deixar o trânsito mais seguro para todos.
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
                <a
                  href="https://github.com/gabrielcastedo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriel-castedo-38145b53"
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
              <img src={Monalisa} />
            </figure>
            <div className="container">
              <p>Monalisa Menezes</p>
              <span>Scrum Master</span>
              <div className="links">
                <a
                  href="https://github.com/monafmenezes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/monalisafmenezes"
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
                <a
                  href="https://github.com/Robert663"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
          onClick={() => navigate("/login")}
        />
        <Button
          primary
          label="CADASTRE-SE"
          style={{ borderRadius: 6 }}
          size="small"
          color="dark-1"
          onClick={() => navigate("/Signup")}
        />
      </ButtonFooter>
    </>
  );
};

export default Sobre;
