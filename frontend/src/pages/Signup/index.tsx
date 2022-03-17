import {
  Box,
  Button,
  Form,
  Header,
  Heading,
  Main,
  FormField,
  grommet,
  Grommet,
  TextInput,
} from "grommet";
import {
  FormPrevious,
  MailOption,
  User,
  Hide,
  Car,
  Blank,
} from "grommet-icons";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import React from "react";
import { deepMerge } from "grommet/utils";
import api from "../../services/api";


interface Users {
  name: string;
  email: string;
  password: string;
  car: object;
}


const myCustomTheme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "black",
    },
  },

  button: {
    border: {
      radius: "0%",
    },
  },
  h1: {
    font: {
      family: "arial",
    },
  },
});

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email inválido").required("Campo Obrigatório"),
  email_confirm: yup
    .string()
    .oneOf([yup.ref("email"), "Email diferente"])
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(8, "mínimo 8 digitos")
    .required("Campo obrigatório"),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password"), "Senhas diferentes"])
    .required("Campo obrigatório"),
  model: yup.string().required("Campo obrigatório"),
  plate: yup.string().required("Campo obrigatório"),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  function submit({email, name, password, model, plate } :FieldValues) {
    
    const car = {model, plate};
    const user = {email, name, password, car};
    console.log(user);

    api
      .post("/users/signup", user)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Grommet theme={myCustomTheme}>
      <Box>
        <Header background="#FFFFFF" height="100px">
          <Button color={"#4B545A"} icon={<FormPrevious />} />
        </Header>
        <Main flex direction="column" align="center" pad="20px" >
          <Heading
            level="1"
            style={{ fontFamily: "comfortaa", fontSize: "35px" }}
          >
            Cadastro
          </Heading>
          <Box width={"300px"}>
            <Form onSubmit={handleSubmit(submit)}>
              <Box
                flex
                direction="column"
                gap="small"
                align="center"
                justify="around"
              >
                <FormField
                  placeholder="Nome Completo"
                  icon={<User />}
                  reverse
                  {...register("name")}
                  required
                 
                />

                <FormField
                  placeholder="Email"
                  type="email"
                  icon={<MailOption />}
                  reverse
                  {...register("email")}
                  required
                />

                <FormField
                  placeholder="Email"
                  type="email"
                  icon={<MailOption />}
                  reverse
                  {...register("email_confirm")}
                  required
                />

                <FormField
                  placeholder="Senha"
                  type="password"
                  icon={<Hide size="30px" />}
                  reverse
                  {...register("password")}
                  required
                />

                <FormField
                  placeholder="Confirmar senha"
                  type="password"
                  icon={<Hide size="30px" />}
                  reverse
                  {...register("password_confirm")}    
                  required    
                />

                <FormField
                  placeholder="Modelo do Carro"
                  icon={<Car  />}
                  reverse
                  {...register("model")}
                  required
          
                />

                <FormField
                  placeholder="Placa do Carro"
                  icon={<Car/>}
                  reverse
                  {...register("plate")}
                  required
                />

                <Button
                  color={"#FBD50E"}
                  primary
                  fill="horizontal"
                  label="Próximo"
                  style={{ border: "2px solid #000000", color: "#000000" }}
                  type="submit"
                />
              </Box>
            </Form>
          </Box>
        </Main>
      </Box>
    </Grommet>
  );
};

export default Signup;
