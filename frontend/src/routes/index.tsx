import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute>home</PublicRoute>} />
      <Route path="/signup" element={<PublicRoute>cadastro</PublicRoute>} />
      <Route path="/login" element={<PublicRoute>login</PublicRoute>} />
      <Route path="/dashboard" element={<PrivateRoute>dash</PrivateRoute>} />
      <Route path="/wallet" element={<PrivateRoute>carteira</PrivateRoute>} />
      <Route path="/history" element={<PrivateRoute>historico</PrivateRoute>} />
    </Routes>
  );
};

export default RoutesPages;
