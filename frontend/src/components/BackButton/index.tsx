import React from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import { FormPrevious } from "grommet-icons";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(-1)}>
      <FormPrevious size="larger" color="#FBD50E" />
    </Container>
  );
};

export default BackButton;
