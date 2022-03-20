import React, { useState } from "react";
import BackButton from "../BackButton";
import { Container } from "./styles";

import userImg from "../../assets/img/Usuario.png";
import ModalMenu from "../ModalMenu";

interface Props {
  title?: string;
  variant?: "filled";
}

const Header = ({ title, variant }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container variant={variant}>
      <BackButton />

      <h1>{title}</h1>

      <div>
        <img
          className="avatar"
          src={userImg}
          alt="user avatar"
          onClick={() => setIsOpen((prevState) => !prevState)}
        />
      </div>
      <ModalMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </Container>
  );
};

export default Header;
