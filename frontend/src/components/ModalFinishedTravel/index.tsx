import React, { useContext, useState } from "react";
import { TravelContext } from "../../providers/travel";
import CardTravel from "../CardTravel";
import Button from "../Button";
import ModalStars from "../ModalStars";

const ModalFinishedTravel = () => {
  const {
    travel: { travel },
  } = useContext(TravelContext);

  const [showFeedback, setShowFeedback] = useState(false);

  console.log(travel);

  return (
    <>
      {showFeedback ? (
        <ModalStars />
      ) : (
        <div>
          <CardTravel isTravel={false} travel={travel} />
          <Button onClick={() => setShowFeedback(true)}>Avaliar</Button>
        </div>
      )}
    </>
  );
};

export default ModalFinishedTravel;
