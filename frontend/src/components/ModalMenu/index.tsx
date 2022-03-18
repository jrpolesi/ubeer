import React from "react";
import { Menu } from "grommet-icons";
import { Popup } from "./styled";
import Button from "../Button/index";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user";
import { Link } from "react-router-dom";
const ModalMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { logOut } = useContext(UserContext);
  return (
    <>
      <Popup>
        <main>
          <header />
          <div>
            <span>Serviços</span>
            <Button variant="rounded"> Adicionar saldo </Button>
            <Button variant="rounded"> Informações da conta</Button>
            <Button variant="rounded"> Preferências </Button>
            <Button variant="rounded"> Suporte </Button>
          </div>
          <a onClick={logOut} href="/">
            Sign out
          </a>
        </main>
      </Popup>
    </>
  );
};

export default ModalMenu;
