import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  bg?: string
}

const Button = ({ children, onClick, variant, bg }: Props) => (
  <Container bg={bg} onClick={onClick} variant={variant}>
    {children}
  </Container>
);

export default Button;
