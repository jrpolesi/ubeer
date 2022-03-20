import React, {  useContext } from "react";
import { TravelContext } from "../../providers/travel";
import { PopupDriver } from "./styles";
import Button from "../Button";

function ModalDriver() {
  const { travelStatus, updateTravelStatus, travel } =
    useContext(TravelContext);

  const handleClick = () => {
    if (travelStatus === "waiting for driver") {
      return updateTravelStatus("in transit");
    }

    //Requisiçao API finalizar
    return updateTravelStatus("finished");
  };

  return (
    <>
      {travelStatus !== "finished" ? (
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
          <Button variant="rounded" onClick={handleClick}>
            {travelStatus === "waiting for driver"
              ? "Motorista chegou"
              : "Cheguei!"}
          </Button>
        </PopupDriver>
      ) : (
        <></>
      )}
    </>
  );
}

export default ModalDriver;
