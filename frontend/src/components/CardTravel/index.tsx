import React, { useContext } from "react";
import { TravelContext } from "../../providers/travel";
import { Travel } from "../../types/travelContext";
import { Container, DivLocation } from "./style";
import { Indicator, Location } from "grommet-icons";

function CardTravel({
  travel,
  isTravel,
}: {
  travel: Travel;
  isTravel: boolean;
}) {
  return (
    <Container>
      {!isTravel && <h2>{travel.departureDate.toString().slice(0, 10)}</h2>}
      <DivLocation>
        <div>
          <span>{travel.departureDate.toString().slice(11, 19)}</span>
          <Indicator
            size="13px"
            style={{ marginRight: "15px" }}
            color="black"
          />
          <p>{travel.from}</p>
        </div>
        <div>
          <span>{travel.arrivedDate.toString().slice(11, 19)}</span>
          <Location size="13px" style={{ marginRight: "15px" }} color="black" />
          <p>{travel.to}</p>
        </div>
      </DivLocation>
    </Container>
  );
}

export default CardTravel;
