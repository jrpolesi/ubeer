import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const Button = ({ children, onClick, variant }: Props) => (
  <Container onClick={onClick} variant={variant}>
    {children}
  </Container>
);

export default Button;
