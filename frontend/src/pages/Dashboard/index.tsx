import {
  Header,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  TextInput,
  Heading,
  List,
  Button,
} from "grommet";
import { Search, Menu } from "grommet-icons";
import React, { useState } from "react";
import { useContext } from "react";
import { TravelContext } from "../../providers/travel/index";
import MapUbeer from "../../components/GoogleMaps";

function DashBoard() {
  const { travelStatus } = useContext(TravelContext);
  const [title, newTtitle] = useState<string>("Localização Atual");

  return (
    <>
      <Header background="light-1" pad="small">
        <Box background="white">
          <Button
            icon={<Menu color="accent-4" />}
            hoverIndicator
            onClick={() => console.log("oi")}
          />
        </Box>
        {title}
      </Header>
      <MapUbeer />
      <Card pad="small" background="accent-4" gap="medium">
        <TextInput
          placeholder="Digite o Local"
          icon={<Search color="black" />}
        />
        <div>
          <Heading>Favoritos</Heading>
          <List primaryKey="local" data={[]} />
        </div>
      </Card>
    </>
  );
}

export default DashBoard;
