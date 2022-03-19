import React from "react";
import BackButton from "../BackButton";
import { Container } from "./styles";

import userImg from "../../assets/img/Usuario.png";

const Header = ({ title }: { title: string }) => {

  return (
    <Container>
      <BackButton />

      <h1>{title}</h1>

      <div>
        <img src={userImg} alt="user avatar" />
      </div>
    </Container>
  );
};

export default Header;
