import React, { useContext } from "react";
import { MailOption, Hide, Mail } from "grommet-icons";
import * as yup from "yup";
import { Main, InputText, Box, Label } from "./styled";
import backArrow from "../../assets/img/Union.svg";
import { grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import backgroundMap from "../../assets/img/map.png";
import myCustomTheme from "../../styles/theme";
import api from "../../services/api";
import { FieldValues, useForm } from "react-hook-form";
import { UserContext } from "../../providers/user";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo Obrigatório"),
  password: yup
    .string()
    .min(8, "mínimo 8 digitos")
    .required("Campo obrigatório"),
});

const Login = () => {
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

  return (
    <Main>
      {/* <Form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              margin={{ bottom: "50px" }}
              placeholder="ryan1456723@example.com"
              icon={<MailOption />}
              reverse
              {...register("email")}
              error={errors.email?.message}
            />
            <FormField
              placeholder="***********"
              icon={<Hide />}
              reverse
              {...register("password")}
              error={errors.password?.message}
            /> */}
      <Box>
        <div>
          <InputText
            placeholder="Email"
            onChange={(e) => console.log(e.target.value)}
          />
          <MailOption style={{ position: "relative" }} />
        </div>
        {/* <MailOption style={{ position: "relative" }} /> */}
        {/* <InputText placeholder="Senha" type="password" /> */}
      </Box>
    </Main>
  );
};

export default Login;
