import React, { useContext } from "react";
import CardTravel from "../../components/CardTravel";
import Header from "../../components/Header";
import { UserContext } from "../../providers/user";
import { Container } from "./style";

const Historic = () => {
  const { user } = useContext(UserContext);
  return (
    <Container>
      <Header title="Histórico" />
      <ul>
        {user &&
          user.travelHistoric.map((historic, index) => (
            <li key={index}>
              <CardTravel isTravel={false} travel={historic}/>
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default Historic;
