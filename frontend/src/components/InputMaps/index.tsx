import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  error?: string;
}

const InputMaps = ({ icon, error, ...rest }: Props) => {
  return (
    <Container>
      {icon}

      <input {...rest} />

      {!!error && <label>{error}</label>}
    </Container>
  );
};

export default InputMaps;
