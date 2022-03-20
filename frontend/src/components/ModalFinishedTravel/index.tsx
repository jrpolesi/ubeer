import React, { useState } from "react";
import Button from "../Button";
import ModalStars from "../ModalStars";

const ModalFinishedTravel = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <>
      {showFeedback ? (
        <ModalStars />
      ) : (
        <div>
          Aquiiiiiiiii{" "}
          <Button onClick={() => setShowFeedback(true)}>Avaliar</Button>
        </div>
      )}
    </>
  );
};

export default ModalFinishedTravel;
