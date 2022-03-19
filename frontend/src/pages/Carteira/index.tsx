import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/user/index";
import api from "../../services/api";
import { Footer, HeaderContainer, Main, Section } from "./styles";
import { Menu } from "grommet-icons";
import QrCode from "../../assets/img/QRCode1.png";
import Button from "../../components/Button";
import LogoSalario from "../../assets/img/dinheiro.png";
import Header from "../../components/Header";

const Carteira = () => {
  const { updateUser, user, token } = useContext(UserContext);

  const handleClick = (value: number) => {
    if (user) {
      const Allvalue = value + user.budget;

      api
        .put(
          `/users/${user.id}/budget?value=${Allvalue}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => updateUser(response.data))
        .catch((err) => console.log(err.response));
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Header title="Saldo" />
      <HeaderContainer>
        <figure onClick={() => console.log("Entrar no menu")}>
          <Menu color="accent-4" />
        </figure>
        <h1>Saldo</h1>
      </HeaderContainer>
      <Main>
        <Section>
          <figure>
            <img src={LogoSalario} alt="Logo do salado" />
          </figure>
          <p>Adicione saldo na sua carteira</p>
          <div>
            <button className="Adicionar" onClick={() => handleClick(50)}>
              R$ 50,00
            </button>
            <button className="Adicionar" onClick={() => handleClick(100)}>
              R$ 100,00
            </button>
          </div>
          <figure className="QrCode">
            <img src={QrCode} alt="QR Code" />
          </figure>
          <Button
            variant="rounded"
            onClick={() => console.log("Requisição para atualizar o saldo")}
          >
            Adicionar saldo
          </Button>
        </Section>
        <Footer>
          <div>
            <p>O seu saldo atual é:</p>
            <input value={`R$ ${user?.budget} `} readOnly />
          </div>
          <Button variant="rounded" onClick={() => navigate("/Dashboard")}>
            Ok
          </Button>
        </Footer>
      </Main>
    </>
  );
};

export default Carteira;
