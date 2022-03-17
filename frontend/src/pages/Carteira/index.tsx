import React from "react";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import {UserContext} from "../../providers/user/index";
// import api from "../../services/api";
import { Footer, Header, Main, Section } from "./styles";
import { Menu } from "grommet-icons";
import LogoSalado from "../../assets/img/dinheiro.png";
import QrCode from "../../assets/img/QRCode1.png";
import Button from "../../components/Button";

const Carteira = () => {
  let wallet = 100;

  // const {updateUser, user} = useContext(UserContext);
  // const {budget ,id} = user;
  // console.log(updateUser);
  // console.log(user);
  // console.log(budget);

  const handleClick = (value: number) =>{
    console.log(wallet += value);

    // const allValue = budget + value;
    // console.log(allValue);

    // api.put(`/users/${id}/budget?value=${allValue}`);

  };

  

  const navigate = useNavigate();

  return(
    <>
      <Header>
        <figure>
          <Menu color="accent-4"/>
        </figure>
        <h1>Saldo</h1>
      </Header>
      <Main>
        <Section>
          <figure>
            <img src={LogoSalado} alt="Logo do salado" />
          </figure>
          <p>Adicione saldo na sua carteira</p>
          <div>
            <button className="Adicionar" onClick={() => handleClick(50)}>R$ 50,00</button>
            <button className="Adicionar" onClick={() => handleClick(100)}>R$ 100,00</button>
          </div>
          <figure className="QrCode">
            <img src={QrCode} alt="QR Code" />
          </figure>
          <Button variant="primary" onClick={() => console.log("Atualizar o saldo")}>Adicionar saldo</Button>
        </Section>
        <Footer>
          <div>
            <p>O seu saldo atual é:</p>
            <input value={`R$ ${wallet} `} />
          </div>
          <Button variant="primary" onClick={() => navigate("/Dashboard")}>Ok</Button>
        </Footer>
      </Main>
    </>
  );
};

export default Carteira;