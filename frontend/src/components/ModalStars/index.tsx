import React, { useContext, useState } from "react";
import { Container, Content } from "./styles";
import { Star, Subtract } from "grommet-icons";
import Button from "../Button";
import { TravelContext } from "../../providers/travel";

const ModalStars = () => {
  const { travel } = useContext(TravelContext);

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
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p></p>
          <textarea placeholder="Mensagem" />
        </Content>
        <Button variant="rounded">Enviar</Button>
      </section>
    </Container>
  );
};

export default ModalStars;
