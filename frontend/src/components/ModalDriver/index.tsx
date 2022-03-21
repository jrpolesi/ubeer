import React, { useContext } from "react";
import { TravelContext } from "../../providers/travel";
import { PopupDriver } from "./styles";
import Button from "../Button";
import api from "../../services/api";
import { UserContext } from "../../providers/user";

function ModalDriver() {
  const { travelStatus, updateTravelStatus, travel, updateTravel } =
    useContext(TravelContext);
  const { user, token } = useContext(UserContext);

  const handleClick = () => {
    if (travelStatus === "waiting for driver") {
      return updateTravelStatus("in transit");
    }

    api
      .put(
        `/travels/finishTravel/users/${user && user.id}?travelid=${
          travel.travel.id
        }`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        updateTravel({
          ...travel,
          travel: response.data,
        });
        return updateTravelStatus("finished");
      });
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
