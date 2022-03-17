import Login from "../pages/Login/index";
import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute  from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Signup from "../pages/Signup";
import { Dashboard } from "grommet-icons";
import Sobre from "../pages/sobre";

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><Sobre /></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><Signup/></PublicRoute>} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/wallet" element={<PrivateRoute>carteira</PrivateRoute>} />
      <Route path="/history" element={<PrivateRoute>historico</PrivateRoute>} />
    </Routes>
  );
};

export default RoutesPages;
