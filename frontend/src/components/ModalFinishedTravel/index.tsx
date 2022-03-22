import React, { useContext, useState } from "react";
import { TravelContext } from "../../providers/travel";
import CardTravel from "../CardTravel";
import Button from "../Button";
import ModalStars from "../ModalStars";
import { Container, TravelCardPos } from "./styles";

const ModalFinishedTravel = ({ resetMap }: {resetMap: () => void}) => {
  const {
    travel: { travel },
  } = useContext(TravelContext);

  const [showFeedback, setShowFeedback] = useState(false);

  console.log(travel);

  return (
    <Container>
      {showFeedback ? (
        <ModalStars resetMap={resetMap} />
      ) : (
        <TravelCardPos>
          <CardTravel isTravel={false} travel={travel} />
          <Button onClick={() => setShowFeedback(true)}>Avaliar</Button>
        </TravelCardPos>
      )}
    </Container>
  );
};

export default ModalFinishedTravel;
