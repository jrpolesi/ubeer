/* eslint-disable indent */
import React from "react";
import { useContext } from "react";
import { TravelContext } from "../../providers/travel/index";
import MapUbeer from "../../components/MapUbeer";
import Header from "../../components/Header";

function DashBoard() {
  const { travelStatus } = useContext(TravelContext);

  return (
    <>
      <Header
        title={
          travelStatus === false
            ? "Selecione o endereço"
            : travelStatus === "waiting for driver"
            ? "Aguardando o motorista"
            : travelStatus === "in transit"
            ? "Em rota"
            : travelStatus === "finished"
            ? "Você chegou"
            : "Avaliação"
        }
      />
      <MapUbeer />
    </>
  );
}

export default DashBoard;
