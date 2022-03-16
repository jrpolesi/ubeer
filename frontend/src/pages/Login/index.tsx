import React from "react";
import { MailOption, Hide } from "grommet-icons";
import * as yup from "yup";
import {
  Box,
  Main,
  Button,
  Form,
  Heading,
  Image,
  FormField,
  Grommet,
} from "grommet";
import backArrow from "../../assets/img/Union.svg";
import { grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import backgroundMap from "../../assets/img/map.png";
import myCustomTheme from "../../styles/theme";

interface loginProps {
  auth: boolean;
  setAuth: boolean;
}

const Login = () => {
  return (
    <Grommet theme={myCustomTheme}>
      <Main background={`url(${backgroundMap})`} pad="large" fill="vertical">
        <Image alignSelf="start" src={backArrow} />
        <Heading style={{ fontFamily: "comfortaa", margin: "40px" }}>
          Entrar
        </Heading>
        <Box>
          <Form>
            <FormField
              margin={{ bottom: "50px" }}
              placeholder="ryan1456723@example.com"
              icon={<MailOption />}
              reverse
            />
            <FormField placeholder="***********" icon={<Hide />} reverse />
            <Button
              style={{
                border: "2px solid black",
                color: "#000000",
                marginTop: "485px",
              }}
              secondary
              alignSelf="center"
              fill="horizontal"
              onClick={() => console.log("oi")}
              primary
              type="submit"
              justify="end"
              label="Log in"
            />
          </Form>
        </Box>
      </Main>
    </Grommet>
  );
};

export default Login;
