import React, { ReactNode, useContext } from "react";
import { TravelContext } from "../../providers/travel/index";
import { PopupDriver, PopupWaitingDriver } from "./style";
import { Indicator } from "grommet-icons";

function ModalDriver() {
  const { travelStatus, updateTravelStatus } = useContext(TravelContext);
  return (
    <>
      {travelStatus === "in transit" ? (
        <PopupDriver>
          <section>
            <div>
              <img src="" alt="" />
              <h2>Nome do Motorista</h2>
              <p>Rating</p>
            </div>
            <div>
              <p>Placa do Carro</p>
              <p>Modelo do Carro</p>
              <p>Preço da Viagem</p>
            </div>
          </section>
          <button onClick={() => updateTravelStatus("finished")}>Chegou</button>
        </PopupDriver>
      ) : travelStatus === "finished" ? (
        <PopupWaitingDriver>
          <section>
            <div>
              <img src="" alt="" />
              <h2>Nome do Motorista</h2>
              <p>Rating</p>
            </div>
            <div>
              <p>Placa do Carro</p>
              <p>Modelo do Carro</p>
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
