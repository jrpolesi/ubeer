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
            Chegou!
          </Header>
          <MapUbeer />
        </>
      ) : travelStatus === "finished" ? (
        <>
          <Header background="light-1" pad="small">
            <Box background="white">
              <Button
                icon={<Menu color="accent-4" />}
                hoverIndicator
                onClick={() => console.log("oi")}
              />
            </Box>
            Em Rota
          </Header>
          <MapUbeer />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default DashBoard;
