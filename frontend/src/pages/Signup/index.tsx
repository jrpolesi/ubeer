import { Grommet, Notification } from "grommet";
import {
  FormPrevious,
  MailOption,
  User,
  Hide,
  Car,
  Blank,
  Mail,
} from "grommet-icons";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { deepMerge } from "grommet/utils";
import api from "../../services/api";
import { Container, Main } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";

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
    .required("Campo obrigatório")
    .matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password"), "Senhas diferentes"])
    .required("Campo obrigatório"),
  model: yup.string().required("Campo obrigatório"),
  plate: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[a-zA-Z]{3}-[0-9]{4}$/),
});

const Signup = () => {
  const [toast, setToast] = useState<boolean | null>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate
  // }

  const submit = ({ model, plate, ...user }: FieldValues) => {
    const userFormated = {
      ...user,
      car: { model, plate },
    };

    api
      .post("/users/signup", userFormated)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        setToast(true);
        console.log(err.response);
      });
  };
  console.log(errors);
  return (
    <Grommet>
      {toast === true && (
        <Notification
          toast
          title="Falha ao realizar Cadastro"
          message="Verifique seu email e tente novamente!"
          onClose={() => setToast(false)}
        />
      )}

      <Container>
        <header>
          <button onClick={()=> navigate("/login")}>
            <FormPrevious size="50px" color="#FBD50E" />
          </button>
        </header>
        <Main>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              error={errors.name?.message}
              register={register}
              name="name"
              placeholder="Nome Completo"
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
              placeholder="Confirmar Email"
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
              placeholder="Confirmar Senha"
              type="password"
            />

            <Input
              error={errors.model?.message}
              register={register}
              name="model"
              placeholder="Modelo do Carro"
              icon={<Car />}
              type="text"
            />

            <Input
              error={errors.plate?.message}
              register={register}
              name="plate"
              placeholder="Placa do Carro"
              icon={<Car />}
              type="text"
            />

            <Button type="submit">Próximo</Button>
          </form>
        </Main>
      </Container>
    </Grommet>
  );
};

export default Signup;
