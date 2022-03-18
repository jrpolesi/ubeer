import React, { ReactNode, useContext } from "react";
import { TravelContext } from "../../providers/travel";
import { PopupDriver, PopupWaitingDriver } from "./style";
import { Indicator } from "grommet-icons";
import api from "./../../services/api";
import { UserContext } from "../../providers/user";
import axios from "axios";

function ModalDriver() {
  const { travelStatus, updateTravelStatus, travel } =
    useContext(TravelContext);

  return (
    <>
      {travelStatus === "waiting for driver" ? (
        <PopupDriver>
          <section>
            <div>
              <img src={travel.driver.image} alt="" />
              <h2>{travel.driver.name}</h2>
              <p>{travel.driver.rating.starsAverage}</p>
            </div>
            <div>
              <p>{travel.driver.car.plate}</p>
              <p>{travel.driver.car.model}</p>
              <p>{travel.driver.car.plate}</p>
            </div>
          </section>
          <button onClick={() => updateTravelStatus("in transit")}>
            Chegou
          </button>
        </PopupDriver>
      ) : travelStatus === "in transit" ? (
        <PopupWaitingDriver>
          <section>
            <div>
              <img src="" alt="" />
              <h2>Nome do Motorista</h2>
              <p>Rating</p>
            </div>
            <div>
              <p>Placa do Carro do Usuario</p>
              <p>Modelo do Carro do Usuario</p>
              <p>Preço da Viagem</p>
            </div>
          </section>
          <button onClick={() => updateTravelStatus("finished")}>Chegou</button>
        </PopupWaitingDriver>
      ) : (
        <></>
      )}
    </>
  );
}

export default ModalDriver;
