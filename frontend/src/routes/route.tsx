import React from "react";
import { useEffect, useState } from "react";
import Login from "../pages/Login";

const Routes = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("@uBeer:token") || "";
    if (token) {
      setAuth(true);
    }
  }, [auth]);
  return <Login />;
};
