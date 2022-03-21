import React, { useContext, useState } from "react";
import { TravelContext } from "../../providers/travel";
import Button from "../Button";
import ModalStars from "../ModalStars";

const ModalFinishedTravel = ({ resetMap }: {resetMap: () => void}) => {
  const {
    travel: { travel },
  } = useContext(TravelContext);
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <>
      {showFeedback ? (
        <ModalStars resetMap={resetMap} />
      ) : (
        <div>
          <div>
            <span>{travel.departureDate}</span>
            <span>{travel.from}</span>
          </div>
          <div>
            <span>{travel.arrivedDate}</span>
            <span>{travel.to}</span>
          </div>
          <Button onClick={() => setShowFeedback(true)}>Avaliar</Button>
        </div>
      )}
    </>
  );
};

export default ModalFinishedTravel;
