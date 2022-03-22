import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/user/index";
import api from "../../services/api";
import { Footer, Main, Section } from "./styles";
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
        </Section>
        <Footer>
          <div>
            <p>O seu saldo é:</p>
            <input value={`R$ ${user?.budget.toFixed(2).replace(".", ",")} `} readOnly />
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
