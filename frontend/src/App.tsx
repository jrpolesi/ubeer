import React from "react";
import GlobalStyle from "./styles/global";
import RoutesPages from "./routes/index";
import { grommet, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";

const theme = deepMerge(grommet, {
});

function App() {
  return (
    <Grommet theme={theme}>
      <GlobalStyle />
      <RoutesPages />
    </Grommet>
  );
}

export default App;
