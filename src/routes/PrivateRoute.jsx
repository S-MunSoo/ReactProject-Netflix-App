import React from "react";
import MovieDetailPage from "../pages/MovieDetailPage";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ auth }) => {
  return auth === true ? <MovieDetailPage /> : <Navigate to="/sinup" />;
};

export default PrivateRoute;
