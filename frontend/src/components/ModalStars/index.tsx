import React, { useState } from "react";
import { Container, Content } from "./style";
import { Star, Subtract } from "grommet-icons";
import Button from "../Button";

interface Props {
  name: string;
  image: string;
  stars: string;
}

const ModalStars = ({ name, image, stars }: Props) => {

  return (
    <Container>
      <section>
        <section>
          <Subtract size="large" color="grey" />
        </section>

        <div>
          <img src={image} />
          <h3>{name}</h3>
        </div>

        <Content>
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p>{stars}</p>
          <textarea placeholder="Mensagem" />
        </Content>
        <Button variant="rounded">Enviar</Button>
      </section>
    </Container>
  );
};

export default ModalStars;
