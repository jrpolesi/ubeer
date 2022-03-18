import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

import { Container, Main } from "./style";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";

import { MailOption, User, Car } from "grommet-icons";
import { Notification } from "grommet";

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  email_confirm: yup
    .string()
    .oneOf([yup.ref("email")], "Email diferente")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(8, "mínimo 8 digitos")
    .required("Campo obrigatório")
    .matches(/[A-Z]/, "Deve conter letra maiúscula")
    .matches(/[0-9]/, "Deve conter um número")
    .matches(/^(?!.*\s).{0,}$/, "Não pode conter espaços"),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas diferentes")
    .required("Campo obrigatório"),
  model: yup.string().required("Campo obrigatório"),
  plate: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[a-zA-Z]{3}-[0-9]{4}$/, "Placa inválida"),
});

const Signup = () => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const submit = ({ model, plate, email, password, name }: FieldValues) => {
    const userFormated = {
      email,
      password,
      name,
      car: { model, plate },
    };

    api
      .post("/users/signup", userFormated)
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        setShowToast(true);
      });
  };

  return (
    <>
      <Header />

      <Container>
        {showToast === true && (
          <Notification
            toast
            status="critical"
            title="Falha ao realizar cadastro"
            message="Ops, algo deu errado! Verifique seus dados e tente novamente"
            onClose={() => setShowToast(false)}
          />
        )}
        <Main>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              error={errors.name?.message}
              register={register}
              name="name"
              placeholder="Nome completo"
              icon={<User />}
              type="text"
            />
            <Input
              error={errors.email?.message}
              register={register}
              name="email"
              placeholder="Email"
              icon={<MailOption />}
              type="email"
            />

            <Input
              error={errors.email_confirm?.message}
              register={register}
              name="email_confirm"
              placeholder="Confirmar email"
              icon={<MailOption />}
              type="email"
            />

            <Input
              error={errors.password?.message}
              register={register}
              name="password"
              placeholder="Senha"
              type="password"
            />

            <Input
              error={errors.password_confirm?.message}
              register={register}
              name="password_confirm"
              placeholder="Confirmar senha"
              type="password"
            />

            <Input
              error={errors.model?.message}
              register={register}
              name="model"
              placeholder="Modelo do veículo"
              icon={<Car />}
              type="text"
            />

            <Input
              error={errors.plate?.message}
              register={register}
              name="plate"
              placeholder="Placa do veículo. Ex: XXX-0000"
              icon={<Car />}
              type="text"
            />

            <Button type="submit">Próximo</Button>
          </form>
        </Main>
      </Container>
    </>
  );
};

export default Signup;
