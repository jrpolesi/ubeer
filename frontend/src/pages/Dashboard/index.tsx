import {
  Header,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  TextInput,
  Heading,
  List,
  Button,
} from "grommet";
import { Search, Menu, LocationPin } from "grommet-icons";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { TravelContext } from "../../providers/travel/index";
import MapUbeer from "../../components/GoogleMaps";
import axios from "axios";

function DashBoard() {
  const { travelStatus, updateTravelStatus } = useContext(TravelContext);

  return (
    <>
      {travelStatus === false ? (
        <>
          <Header background="light-1" pad="small">
            <Box background="white">
              <Button
                icon={<Menu color="accent-4" />}
                hoverIndicator
                onClick={() => console.log("oi")}
              />
            </Box>
            Localização Atual
          </Header>
          <MapUbeer />
          <Card pad="small" background="accent-4" gap="medium">
            <TextInput
              placeholder="Digite o Local"
              icon={<Search color="black" />}
              onClick={() => updateTravelStatus("waiting for driver")}
            />
            <div>
              <Heading>Favoritos</Heading>
              <List primaryKey="local" data={[]} />
            </div>
          </Card>
        </>
      ) : travelStatus === "waiting for driver" ? (
        <>
          <Header background="light-1" pad="small">
            <Box background="white">
              <Button
                icon={<Menu color="accent-4" />}
                hoverIndicator
                onClick={() => console.log("oi")}
              />
            </Box>
            Selecione o Endereço
          </Header>
          <MapUbeer />
          <Card pad="small" background="accent-4" gap="medium">
            <TextInput
              placeholder="Digite onde você está"
              icon={<Search color="black" />}
            />
            <input />
            <TextInput
              placeholder="Digite para onde você quer ir"
              icon={<LocationPin color="black" />}
            />
            <Button
              color="black"
              hoverIndicator
              onClick={() => updateTravelStatus("in transit")}
            >
              Chamar Motorista
            </Button>
            <div>
              <Heading>Favoritos</Heading>
              <List
                primaryKey="local"
                data={[]}
                //preciso passar um axios para consumir a API das rotas favoritas
                onClick={() => console.log("oi")}
              />
            </div>
          </Card>
        </>
      ) : travelStatus === "in transit" ? (
        <>
          <Header background="light-1" pad="small">
            <Box background="white">
              <Button
                icon={<Menu color="accent-4" />}
                hoverIndicator
                onClick={() => console.log("oi")}
              />
            </Box>
            Selecione o Endereço
          </Header>
          <MapUbeer />
          <Card pad="small" background="accent-4" gap="medium">
            <TextInput
              placeholder="Digite onde você está"
              icon={<Search color="black" />}
            />
            <TextInput
              placeholder="Digite para onde você quer ir"
              icon={<LocationPin color="black" />}
            />
            <Button
              icon={<Menu color="accent-4" />}
              hoverIndicator
              onClick={() => updateTravelStatus("in transit")}
            >
              Chamar Motorista
            </Button>
            <div>
              <Heading>Favoritos</Heading>
              <List
                primaryKey="local"
                data={[]}
                //preciso passar um axios para consumir a API das rotas favoritas
                onClick={() => console.log("oi")}
              />
            </div>
          </Card>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default DashBoard;
