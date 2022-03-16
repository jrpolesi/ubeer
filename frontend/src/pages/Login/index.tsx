import React from "react";
import { MailOption, Hide } from "grommet-icons";
import * as yup from "yup";
import styled from "styled-components";
import { Box, Main, Button, Form, Heading, Image, FormField } from "grommet";
import backArrow from "../../assets/img/Union.svg";

interface loginProps{
  auth: boolean;
  setAuth: boolean;
}
const Login = ({auth, setAuth}: loginProps) => {
  return (
    <Main pad="large" fill="vertical">
      <Image alignSelf="start" src={backArrow} />
      <Heading margin={{ bottom: "large" }}>Entrar</Heading>
      <Box>
        <Form>
          <FormField
            margin={{ bottom: "50px" }}
            placeholder="ryan1456723@example.com"
            icon={<MailOption />}
            dropHeight="medium"
            reverse
          />
          <FormField placeholder="***********" icon={<Hide />} reverse />
          <Button
            color="#FBD50E"
            alignSelf="center"
            margin={{ top: "520px" }}
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
  );
};

export default Login;
