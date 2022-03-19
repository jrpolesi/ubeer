import React, { useContext, useState } from "react";
import { Container, Content } from "./styles";
import { Subtract } from "grommet-icons";
import Button from "../Button";
import { TravelContext } from "../../providers/travel";
import { Rating } from "react-simple-star-rating";
import api from "../../services/api";
import { UserContext } from "../../providers/user";

const ModalStars = () => {
  const { travel } = useContext(TravelContext);
  const { token } = useContext(UserContext);
  const [ratingValue, setRatingValue] = useState(0);
  const [evaluation, setEvaluation] = useState("Sua avaliação");
  const [description, setDescription] = useState("");

  const handleRating = (rate: number) => {
    setRatingValue(rate);
    const tipos = ["Péssimo", "Ruim", "Regular", "Bom", "Ótimo"];
    setEvaluation(tipos[rate / 20 - 1]);
  };

  const handleSubmit = () => {
    const stars = ratingValue / 20;
 
    api
      .post(`/drivers/${travel.driver.id}/rating?stars=${stars}&description=${description}`, {}, {headers: {
        Authorization: `Bearer ${token}`
      }})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <section>
        <section>
          <Subtract size="large" color="grey" />
        </section>

        <div>
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
