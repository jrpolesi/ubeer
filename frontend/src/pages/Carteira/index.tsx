import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {UserContext} from "../../providers/user/index";
import api from "../../services/api";
import { Footer, Header, HeaderDesktop, Main, Section } from "./styles";
import { Menu } from "grommet-icons";
import QrCode from "../../assets/img/QRCode1.png";
import Button from "../../components/Button";
import LogoSalado from "../../assets/img/dinheiro.png";
import Voltar from "../../assets/img/Voltar.png";
import Usuario from "../../assets/img/Usuario.png";

const Carteira = () => {

  const {updateUser, user, token} = useContext(UserContext);
  console.log(user);
  console.log(user?.budget);
  const budget = user?.budget;
  const id = user?.id;
  const name = user?.name;
  const email = user?.email;

  const handleClick = (value: number) =>{

    // const allValue = budget? + value: number;
    // console.log(allValue);

    // api.put(`/users/${id}/budget?value=${allValue}`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // })
    //   .then(response => console.log(response))
    //   .catch(err => console.log(err));

  };

  // useEffect(() => {
  // },[]);

  const navigate = useNavigate();

  return(
    <>
      <Header>
        <figure onClick={() => console.log("Entrar no menu")}>
          <Menu color="accent-4"/>
        </figure>
        <h1>Saldo</h1>
      </Header>
      <HeaderDesktop>
        <figure onClick={() => console.log("Voltar para o Dashboard")}>
          <img src={Voltar} alt="Botão para voltar" />
        </figure>
        <div>
          <div>
            <p>{name}</p>
            <span>{email}</span>
          </div>
          <img src={Usuario} alt="Imagem do usuário" onClick={() => console.log("Entrar no menu")}/>
        </div>
      </HeaderDesktop>
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
          <Button variant="primary" onClick={() => console.log("Requisição para atualizar o saldo")}>Adicionar saldo</Button>
        </Section>
        <Footer>
          <div>
            <p>O seu saldo atual é:</p>
            <input value={`R$ ${budget} `} />
          </div>
          <Button variant="primary" onClick={() => navigate("/Dashboard")}>Ok</Button>
        </Footer>
      </Main>
    </>
  );
};

export default Carteira;