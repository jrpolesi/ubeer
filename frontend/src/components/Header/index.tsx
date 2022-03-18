import { FormPrevious } from "grommet-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <button onClick={() => navigate("/login")}>
        <FormPrevious size="larger" color="#FBD50E" />
      </button>
    </Container>
  );
};

export default Header;
