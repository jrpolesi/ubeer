import React, { Dispatch, SetStateAction, useContext } from "react";
import { Background } from "./styles";
import Button from "../Button/index";
import { UserContext } from "../../providers/user";
import userImg from "../../assets/img/Usuario.png";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalMenu = ({ isOpen, setIsOpen }: Props) => {
  const { logOut, user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Background className={isOpen ? "" : "hide"}>
      <div className="menu">
        {user && (
          <div className="header">
            <div>
              <img src={userImg} alt="user avatar" />
              <h2>{user.name}</h2>
              <span>{user.email}</span>
            </div>
            <span className="closeButton" onClick={() => setIsOpen(false)}>
              X
            </span>
          </div>
        )}
        <div className="buttons">
          <Button variant="rounded" onClick={() => navigate("/wallet")}>
            {" "}
            Adicionar saldo{" "}
          </Button>
          <Button variant="rounded"> Informações da conta</Button>
          <Button variant="rounded"> Preferências </Button>
          <Button variant="rounded" onClick={() => navigate("/support")}>
            {" "}
            Suporte{" "}
          </Button>
        </div>
        <span className="signout" onClick={logOut}>
          Sign out
        </span>
      </div>
    </Background>
  );
};

export default ModalMenu;
