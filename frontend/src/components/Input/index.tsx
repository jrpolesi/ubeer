import React, { InputHTMLAttributes, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { Hide, FormView } from "grommet-icons";
import { Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  name: string;
  error?: string;
  register: UseFormRegister<FieldValues>;
}

const Input = ({
  register,
  name,
  placeholder,
  type,
  icon,
  error,
  ...rest
}: Props) => {
  const [controledType, setControledType] = useState(type);
  const [showPassword, setShowPassword] = useState(false);

  const toggleType = () => {
    setControledType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Container>
      <div className="inputContent">
        <input
          type={controledType}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
        />
        {type === "password" ? (
          <>
            {showPassword ? (
              <FormView onClick={toggleType} />
            ) : (
              <Hide onClick={toggleType} />
            )}
          </>
        ) : (
          icon
        )}
      </div>

      {!!error && <label>{error}</label>}
    </Container>
  );
};

export default Input;
