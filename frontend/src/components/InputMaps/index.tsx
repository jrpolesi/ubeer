import React, { InputHTMLAttributes, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { Hide, FormView } from "grommet-icons";
import { Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon: JSX.Element;
  error?: string;
}

const InputMaps = ({
  icon,
  error,
  ...rest
}: Props) => {


  return (
    <Container>
      {icon}

      <input
        {...rest}
      />

      {!!error && <label>{error}</label>}
    </Container>
  );
};

export default InputMaps;
