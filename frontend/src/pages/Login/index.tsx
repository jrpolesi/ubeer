import React, { useContext } from "react";
import { MailOption, Hide } from "grommet-icons";
import * as yup from "yup";
import { Main, Box } from "./styled";
import Header from "../../components/Header/index";
import api from "../../services/api";
import { FieldValues, useForm } from "react-hook-form";
import { UserContext } from "../../providers/user";
import Input from "../../components/Input/index";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button/index";
import { FormField } from "grommet";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "mínimo 8 digitos")
      .required("Campo obrigatório"),
  });
  const { updateToken } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (formData: FieldValues) => {
    console.log(formData);
    api
      .post("/users/login", formData)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("@uBeer:user", user.id);
        updateToken(token);
      })
      .catch((error) => console.log(error));
  };
  // console.log(errors);
  return (
    <>
      <Header />
      <Main>
        <Box>
          <FormField onSubmit={handleSubmit(onSubmit)}>
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
          </FormField>
        </Box>
      </Main>
    </>
  );
};

export default Login;
