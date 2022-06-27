import React from "react";
import { useNavigate } from "react-router-dom";

const MovieDetailInfo = ({ movies }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/Movie/${movies.id}`);
  };
  return (
    <div className="movie-info" onClick={showDetail}>
      무비 디테일
    </div>
  );
};

export default MovieDetailInfo;
