import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Footer, Main, Section, SectionContainer } from "./styles";
import Conta from "../../assets/img/iconConta.png";
import Favoritos from "../../assets/img/iconFavoritos.png";
import Suporte from "../../assets/img/iconSuporte.png";
import Cancel from "../../assets/img/iconCancel.png";
import bebado from "../../assets/img/bebado.jpg";
import {
  Car,
  Favorite,
  History,
  MailOption,
  Support,
  User,
  UserSettings,
} from "grommet-icons";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { UserContext } from "../../providers/user";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const editUser = ({ model, plate, email, password, name }: FieldValues) => {
    const userFormated = {
      email,
      password,
      name,
      car: { model, plate },
    };
  };

  const [bill, setBill] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <Header title="Preferências" />

      <Main>
        {bill && (
          <SectionContainer>
            <div>
              <button onClick={() => setBill(false)}>X</button>
              <h2>Editar informações</h2>
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
          </SectionContainer>
        )}

        {favorite && (
          <SectionContainer>
            <div>
              <button onClick={() => setFavorite(false)}>X</button>
              <h2>Favoritos</h2>
            </div>
            {user?.favoritesPlaces.length === 0 ? (
              <aside>
                <p>Sem favoritos salvos</p>
                <figure>
                  <img src={bebado} alt="Imagem de um bebado" />
                </figure>
              </aside>
            ) : (
              <ul>
                {user?.favoritesPlaces.map((favorite) => (
                  <li key={favorite.id}>
                    <p>{favorite.name}</p>
                  </li>
                ))}
              </ul>
            )}
          </SectionContainer>
        )}
        <Section>
          <div onClick={() => setBill(true)}>
            <div
              style={{
                width: "82px",
                height: "82px",
                background: "#FBD50E",
                borderRadius: "50%",
              }}
            >
              <UserSettings
                color="white"
                size="42px"
                style={{ padding: "14px" }}
              />
            </div>
            <p>Conta</p>
          </div>
          <div onClick={() => setFavorite(true)}>
            <div
              style={{
                width: "82px",
                height: "82px",
                background: "#FBD50E",
                borderRadius: "50%",
              }}
            >
              <Favorite color="white" size="42px" style={{ padding: "14px" }} />
            </div>
            <p>Favoritos</p>
          </div>
        </Section>
        <Section>
          <div onClick={() => navigate("/history")}>
            <div
              style={{
                width: "82px",
                height: "82px",
                background: "#FBD50E",
                borderRadius: "50%",
              }}
            >
              <History color="white" size="42px" style={{ padding: "14px" }} />
            </div>
            <p>Histórico</p>
          </div>
          <div onClick={() => navigate("/support")}>
            <div
              style={{
                width: "82px",
                height: "82px",
                background: "#FBD50E",
                borderRadius: "50%",
              }}
            >
              <Support color="white" size="42px" style={{ padding: "14px" }} />
            </div>
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
