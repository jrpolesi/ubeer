import React, { useContext, useState } from "react";
import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

import { UserContext } from "../../providers/user";

import { Main } from "./styled";
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";

import { MailOption, Hide } from "grommet-icons";
import { Notification } from "grommet";
import BackButton from "../../components/BackButton";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo Obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

const Login = () => {
  const { updateToken } = useContext(UserContext);

  const [showToast, setShowToast] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData: FieldValues) => {
    api
      .post("/users/login", formData)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@uBeer:user", user.id);

        updateToken(token);
      })
      .catch(() => setShowToast(true));
  };

  return (
    <>
      <BackButton />

      <Main>
        {showToast === true && (
          <Notification
            toast
            status="critical"
            title="Falha ao realizar cadastro"
            message="Email ou senha inválido!"
            onClose={() => setShowToast(false)}
          />
        )}
        <h1>Entrar</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            icon={<MailOption />}
            placeholder={"Email"}
            name="email"
            type="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            icon={<Hide />}
            placeholder={"Senha"}
            type="password"
            name="password"
            register={register}
            error={errors.password?.message}
          />
          <Button type="submit">Log in</Button>
        </form>
      </Main>
    </>
  );
};

export default Login;
