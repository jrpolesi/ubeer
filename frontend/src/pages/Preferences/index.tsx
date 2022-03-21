import React, { useState } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Footer, Main, Section, SectionConta } from "./styles";
import Conta from "../../assets/img/iconConta.png";
import Favoritos from "../../assets/img/iconFavoritos.png";
import Suporte from "../../assets/img/iconSuporte.png";
import Cancel from "../../assets/img/iconCancel.png";
import { Car, MailOption, User } from "grommet-icons";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Preferences = () => {

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "mínimo 8 digitos")
      .required("Campo obrigatório")
      .matches(/[A-Z]/, "Deve conter letra maiúscula")
      .matches(/[0-9]/, "Deve conter um número")
      .matches(/^(?!.*\s).{0,}$/, "Não pode conter espaços"),
    model: yup.string().required("Campo obrigatório"),
    plate: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[a-zA-Z]{3}-[0-9]{4}$/, "Placa inválida"),
  });

  const navigate = useNavigate();
  const [conta, setConta] = useState(false);
  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const editUser = ({ model, plate, email, password, name }: FieldValues) => {
    const userFormated = {
      email,
      password,
      name,
      car: { model, plate },
    };
    console.log(userFormated);
  };

  return(
    <>
      <Header title="Preferências"/>

      

      <Main>
        {conta && (
          <SectionConta>
            <div>
              <button onClick={() => setConta(false)}>X</button>
            </div>
            <div>
              <figure>
                <img src="" alt="" />
              </figure>
              <h1></h1>
              <p></p>
            </div>
            <form onSubmit={handleSubmit(editUser)}>
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
                error={errors.password?.message}
                register={register}
                name="password"
                placeholder="Senha"
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
              <Button type="submit">Salvar</Button>
            </form>
          </SectionConta>
        )}
        <Section>
          <div onClick={() => setConta(true)}>
            <img src={Conta} alt="Conta" />
            <p>Conta</p>
          </div>
          <div onClick={() => navigate("/favorite")}>
            <img src={Favoritos} alt="Favoritos" />
            <p>Favoritos</p>
          </div>
        </Section>
        <Section>
          <div onClick={() => navigate("/history")}>
            <img src={Conta} alt="Histórico" />
            <p>Histórico</p>
          </div>
          <div onClick={() => navigate("/support")}>
            <img src={Suporte} alt="Suporte" />
            <p>Suporte</p>
          </div>
        </Section>
      </Main>
      <Footer>
        <figure onClick={() => navigate(-1)}>
          <img src={Cancel} alt="Botão para voltar" />
        </figure>
      </Footer>

    </>
  );
};

export default Preferences;