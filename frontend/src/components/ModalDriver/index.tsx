import React, { useContext } from "react";
import { TravelContext } from "../../providers/travel";
import { PopupDriver, PopUpLeft, PopupRight } from "./styles";
import Button from "../Button";
import api from "../../services/api";
import { UserContext } from "../../providers/user";
import { Star } from "grommet-icons";

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
  console.log(travel);
  return (
    <>
      {travelStatus !== "finished" ? (
        <PopupDriver>
          <section>
            <PopUpLeft>
              <div>
                <img src={travel.driver.image} alt="" />
                <h2>{travel.driver.name}</h2>
              </div>
              <p>
                {travel.driver.rating.starsAverage} <Star color="#f8d50e" />
              </p>
            </PopUpLeft>
            <PopupRight>
              <h3>{travel.driver.car.plate}</h3>
              <p>{travel.driver.car.model}</p>
              <h4> R$ {travel.travel.value}</h4>
            </PopupRight>
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
