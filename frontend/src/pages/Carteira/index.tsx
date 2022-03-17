import React from "react";
import { Box, Button, Header, Heading, Image, Main } from "grommet";
import { Menu } from "grommet-icons";
import Fundo from "../../assets/img/bg.svg";
const Carteira = () => {

  return(
    <>
      <Header background="light-1" pad="0px 25px" height="66px">
        <Box background="white" style={{borderRadius: 90, boxShadow: "1px 1px 8px #ccc", width: 36, height: 36}} align="center" justify="center">
          <Button
            icon={<Menu color="accent-4" />}
            hoverIndicator
            onClick={() => console.log("Menu")}
          />
        </Box>
        <Heading>Saldo</Heading>
      </Header>
      <Main pad="large">
        <Heading>Something</Heading>
      </Main>
    </>
  );
};

export default Carteira;