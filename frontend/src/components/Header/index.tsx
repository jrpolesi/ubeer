import React, { useState } from "react";
import BackButton from "../BackButton";
import { Container } from "./styles";

import userImg from "../../assets/img/Usuario.png";
import ModalMenu from "../ModalMenu";

const Header = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <BackButton />

      <h1>{title}</h1>

      <div>
        <img className="avatar" src={userImg} alt="user avatar" onClick={() => setIsOpen(prevState => !prevState)}/>
      </div>
      <ModalMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </Container>
  );
};

export default Header;
