import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Motorista from "../../assets/img/imagemSobre.png";
import Background from "../../assets/img/background.png";
import Gabriel from "../../assets/img/Gabriel.jpeg";
import Monalisa from "../../assets/img/Monalisa.jpeg";
import Jose from "../../assets/img/Jose.jpeg";
import Carlos from "../../assets/img/Carlos.jpeg";
import Robert from "../../assets/img/Robert.png";
import {
  Anchor,
  Box,
  Button,
  Footer,
  Header,
  Heading,
  Image,
  Main,
  Nav,
  Paragraph,
  Text,
} from "grommet";
import { Github, Linkedin } from "grommet-icons";
// import {
//   ButtonFooter,
//   LogoSection,
//   Main,
//   SobreArticle,
//   TimeSection,
// } from "./styles";

const Sobre = () => {
  const navigate = useNavigate();

  return (
    <>
      <Main>
        <Box
          direction="row"
          align="center"
          justify="center"
          height="470px"
          margin="0px 0px 20px 0px"
          background={`url(${Background})`}
          style={{ boxShadow: "0 4 4 #00000040" }}
        >
          <Box height="66px" width="66px">
            <Image fit="cover" src={Logo} />
          </Box>
          <Heading>uBeer</Heading>
        </Box>
        <Box align="center" pad="0px 25px">
          <Heading>Sobre a uBeer</Heading>
          <Box height="200px" width="200px">
            <Image fit="cover" src={Motorista} />
          </Box>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only.
          </Paragraph>
        </Box>
        <Box pad="0px 25px 10px 25px">
          <Heading alignSelf="center" margin="25px 0px">
            Nosso Time
          </Heading>
          <Box direction="row">
            <Box height="66px" width="66px" margin="0px 10px 0px 0px">
              <Image fit="cover" src={Gabriel} style={{ borderRadius: 90 }} />
            </Box>
            <Box>
              <Paragraph>Gabriel Castedo</Paragraph>
              <Text>Product Owner</Text>
              <Nav direction="row" margin="5px 0px 0px 0px">
                <Anchor href="" target="_blank">
                  <Github size="22px" />
                </Anchor>
                <Anchor href="#">
                  <Linkedin size="22px" />
                </Anchor>
              </Nav>
            </Box>
          </Box>
          <Box direction="row">
            <Box height="66px" width="66px" margin="0px 10px 0px 0px">
              <Image fit="cover" src={Monalisa} style={{ borderRadius: 90 }} />
            </Box>
            <Box>
              <Paragraph>Monalisa Menezes</Paragraph>
              <Text>Scrum Master</Text>
              <Nav direction="row" margin="5px 0px 0px 0px">
                <Anchor href="" target="_blank">
                  <Github size="22px" />
                </Anchor>
                <Anchor href="#">
                  <Linkedin size="22px" />
                </Anchor>
              </Nav>
            </Box>
          </Box>
          <Box direction="row">
            <Box height="66px" width="66px" margin="0px 10px 0px 0px">
              <Image fit="cover" src={Jose} style={{ borderRadius: 90 }} />
            </Box>
            <Box>
              <Paragraph>José Kremer</Paragraph>
              <Text>Tech Lead</Text>
              <Nav direction="row" margin="5px 0px 0px 0px">
                <Anchor href="" target="_blank">
                  <Github size="22px" />
                </Anchor>
                <Anchor href="#">
                  <Linkedin size="22px" />
                </Anchor>
              </Nav>
            </Box>
          </Box>
          <Box direction="row">
            <Box height="66px" width="66px" margin="0px 10px 0px 0px">
              <Image fit="cover" src={Carlos} style={{ borderRadius: 90 }} />
            </Box>
            <Box>
              <Paragraph>Carlos Vitor</Paragraph>
              <Text>Quality Assurance</Text>
              <Nav direction="row" margin="5px 0px 0px 0px">
                <Anchor href="" target="_blank">
                  <Github size="22px" />
                </Anchor>
                <Anchor href="#">
                  <Linkedin size="22px" />
                </Anchor>
              </Nav>
            </Box>
          </Box>
          <Box direction="row">
            <Box height="66px" width="66px" margin="0px 10px 0px 0px">
              <Image fit="cover" src={Robert} style={{ borderRadius: 90 }} />
            </Box>
            <Box>
              <Paragraph>Robert Costa</Paragraph>
              <Text>Quality Assurance</Text>
              <Nav direction="row" margin="5px 0px 0px 0px">
                <Anchor href="" target="_blank">
                  <Github size="22px" />
                </Anchor>
                <Anchor href="#">
                  <Linkedin size="22px" />
                </Anchor>
              </Nav>
            </Box>
          </Box>
        </Box>
      </Main>

      <Footer background="status-unknown" pad="medium">
        <Button
          primary
          label="LOG IN"
          color="accent-4"
          style={{
            borderRadius: 6,
            fontSize: 12,
            width: 140,
            border: "2px solid #333333",
          }}
          onClick={() => navigate("/Login")}
        />
        <Button
          primary
          label="CADASTRE-SE"
          color="dark-1"
          style={{
            borderRadius: 6,
            fontSize: 12,
            width: 140,
            border: "2px solid #333333",
          }}
          width="60px"
          onClick={() => navigate("/Signup")}
        />
      </Footer>
    </>
  );
};

export default Sobre;
