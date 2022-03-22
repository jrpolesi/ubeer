import React, { useContext, useState } from "react";
import BackButton from "../BackButton";
import { Container } from "./styles";
import ModalMenu from "../ModalMenu";
import { UserContext } from "../../providers/user";
import Avatar from "../Avatar";

interface Props {
  title?: string;
  variant?: "filled";
}

const Header = ({ title, variant }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <Container variant={variant}>
      <BackButton />

      <h1>{title}</h1>
      <div className="Avatar" onClick={() => setIsOpen((prevState) => !prevState)}>
        <Avatar name={user?.name}/>
      </div>
      <ModalMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </Container>
  );
};

export default Header;
