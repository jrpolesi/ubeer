import React from "react";
import { Box, Button, Image } from "grommet";
import { Menu, Qr } from "grommet-icons";
import { Header, Main } from "./styles";
import LogoSalado from "../../assets/img/dinheiro.png";
import { useNavigate } from "react-router-dom";

const Carteira = () => {
  const navigate = useNavigate();

  return(
    <>
      <Header>
        <Box background="white" style={{borderRadius: 90, boxShadow: "1px 1px 8px #ccc", width: 36, height: 36}} align="center" justify="center">
          <Button
            icon={<Menu color="accent-4" />}
            hoverIndicator
            onClick={() => console.log("Menu")}
          />
        </Box>
        <h1>Saldo</h1>
      </Header>
      <Main>
        <section>
          <figure>
            <img src={LogoSalado} alt="Logo do salado" />
          </figure>
          <p>Adicione saldo na sua carteira</p>
          <div>
            <input name="R$ 50,00" type="button" value="50" />
            <input name="R$ 100,00" type="button" value="100" />
          </div>
          <figure className="QrCode">
            <Qr/>
          </figure>
          <Button primary label="Adicionar saldo" onClick={() => console.log("Atualizar o saldo")} style={{borderRadius: 30}}/>
        </section>
        <footer>
          <div>
            <p>O seu saldo atual é:</p>
            <span>R$ 150,00</span>
          </div>
          <Button primary label="Ok" onClick={() => navigate("/Dashboard")} />
        </footer>
      </Main>
    </>
  );
};

export default Carteira;