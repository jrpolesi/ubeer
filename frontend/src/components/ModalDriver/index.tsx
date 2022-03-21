import React, { useContext, Dispatch, SetStateAction } from "react";
import { TravelContext } from "../../providers/travel";
import { PopupDriver, PopUpLeft, PopupRight } from "./styles";
import Button from "../Button";
import api from "../../services/api";
import { UserContext } from "../../providers/user";
import { Star } from "grommet-icons";

interface Props {
  setMessageOnRoute: Dispatch<SetStateAction<boolean>>;
}

function ModalDriver({ setMessageOnRoute }: Props) {
  const { travelStatus, updateTravelStatus, travel, updateTravel } =
    useContext(TravelContext);
  const { user, token } = useContext(UserContext);

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
                  ? `R$ ${travel.travel.value}`
                  : ""}
              </h4>
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
