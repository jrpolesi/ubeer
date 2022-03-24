import React, { useContext } from "react";
import { TravelContext } from "../../providers/travel";
import { PopupDriver, Left, Right } from "./styles";
import Button from "../Button";
import api from "../../services/api";
import { UserContext } from "../../providers/user";
import { Star } from "grommet-icons";
import { MapContext } from "../../providers/map";

function ModalDriver() {
  const { travelStatus, updateTravelStatus, travel, updateTravel } =
    useContext(TravelContext);
  const { user, updateUser, token } = useContext(UserContext);
  const {setMessageOnRoute} = useContext(MapContext);

  const handleClick = () => {
    if (travelStatus === "waiting for driver") {
      setMessageOnRoute(true);
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
        updateUser(response.data.user);

        updateTravel({
          ...travel,
          travel: response.data.travel,
        });

        return updateTravelStatus("finished");
      });
  };

  return (
    <>
      {travelStatus !== "finished" ? (
        <PopupDriver>
          <section>
            <Left>
              <div className="driver-avatar">
                <img src={travel.driver.image} alt="" />
                <h2>{travel.driver.name}</h2>
              </div>
              <div className="stars">
                <span>{travel.driver.rating.starsAverage.toFixed(1)}</span>
                <Star color="#f8d50e" />
              </div>
            </Left>
            <Right>
              <h3>
                {travelStatus === "waiting for driver"
                  ? travel.driver.car.plate
                  : user?.car.plate}
              </h3>
              <p>
                {travelStatus === "waiting for driver"
                  ? travel.driver.car.model
                  : user?.car.model}
              </p>
              <h4>
                {travelStatus === "waiting for driver"
                  ? `R$ ${travel.travel.value.toFixed(2)}`
                  : ""}
              </h4>
            </Right>
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
