import React, { useContext, useState } from "react";
import { Container, Content } from "./styles";
import Button from "../Button";
import { TravelContext } from "../../providers/travel";
import { Rating } from "react-simple-star-rating";
import api from "../../services/api";
import { UserContext } from "../../providers/user";
import { Notification } from "grommet";
import { TravelData } from "../../types/travelContext";
import { MapContext } from "../../providers/map";

const ModalStars = () => {
  const { travel, updateTravelStatus, updateTravel } =
    useContext(TravelContext);
  const { token } = useContext(UserContext);
  const {resetMap} = useContext(MapContext);
  const [ratingValue, setRatingValue] = useState(0);
  const [evaluation, setEvaluation] = useState("Sua avaliação");
  const [description, setDescription] = useState("");
  const [toastSucess, setToastSucess] = useState(false);

  const handleRating = (rate: number) => {
    setRatingValue(rate);
    const tipos = ["Péssimo", "Ruim", "Regular", "Bom", "Ótimo"];
    setEvaluation(tipos[rate / 20 - 1]);
  };

  const handleSubmit = () => {
    const stars = ratingValue / 20;

    api
      .post(
        `/drivers/${travel.driver.id}/rating?stars=${stars}&description=${description}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setToastSucess(true);
        updateTravelStatus(false);
        updateTravel({} as TravelData);
        resetMap();
      });
  };

  return (
    <Container>
      {toastSucess === true && (
        <Notification
          toast
          status="normal"
          title="Sucesso ao realizar avaliação"
          message="Deu tudo certo!"
          onClose={() => setToastSucess(false)}
        />
      )}

      <section>
        <div>
          <div className="subtract"></div>
        </div>

        <div className="driver-avatar">
          <img src={travel?.driver?.image} />
          <h3>{travel?.driver?.name}</h3>
        </div>

        <Content>
          <div>
            <Rating
              ratingValue={ratingValue}
              transition
              onClick={handleRating}
            />

            <p>{evaluation}</p>
          </div>
        </Content>

        <textarea
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Mensagem"
        />
        <Button onClick={handleSubmit} variant="rounded">
          Enviar
        </Button>
      </section>
    </Container>
  );
};

export default ModalStars;
