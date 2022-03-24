import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/index";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Signup from "../pages/Signup";
import DashBoard from "../pages/Dashboard";
import About from "../pages/About";
import Wallet from "../pages/Wallet";
import Preferences from "../pages/Preferences";
import Support from "../pages/Support";
import Historic from "../pages/Historic/Historic";

const RoutesPages = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <About />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        }
      />
      <Route
        path="/wallet"
        element={
          <PrivateRoute>
            <Wallet />
          </PrivateRoute>
        }
      />
      <Route
        path="/preferences"
        element={
          <PrivateRoute>
            <Preferences />
          </PrivateRoute>
        }
      />
      <Route
        path="/support"
        element={
          <PrivateRoute>
            <Support />
          </PrivateRoute>
        }
      />
      <Route
        path="/history"
        element={
          <PrivateRoute>
            <Historic />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RoutesPages;
