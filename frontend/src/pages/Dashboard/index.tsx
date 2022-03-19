/* eslint-disable indent */
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
import { Search, Menu, LocationPin, Previous } from "grommet-icons";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { TravelContext } from "../../providers/travel/index";
import MapUbeer from "../../components/GoogleMaps";

function DashBoard() {
  const { travelStatus, updateTravelStatus } = useContext(TravelContext);

  return (
    <>
      <Header background="light-1" pad="small">
        <Box background="white">
          {travelStatus === "waiting for driver" ? (
            <>
              <Button
                icon={<Previous color="accent-4" />}
                hoverIndicator
                onClick={() => updateTravelStatus(false)}
              />
            </>
          ) : (
            <>
              <Button
                icon={<Menu color="accent-4" />}
                hoverIndicator
                onClick={() => console.log("oi")}
              />
            </>
          )}
        </Box>
        {travelStatus === false
          ? "Localização Atual"
          : travelStatus === "waiting for driver"
          ? "Selecione o endereço"
          : travelStatus === "in transit"
          ? "Chegou"
          : travelStatus === "finished"
          ? "Em rota"
          : ""}
      </Header>
      <MapUbeer />
    </>
  );
}

export default DashBoard;
