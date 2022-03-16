import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/user";
import { TravelProvider } from "./providers/travel";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <TravelProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TravelProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
