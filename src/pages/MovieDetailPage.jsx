import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
const MovieDetailPage = () => {
  // const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
  //   (state) => state.movie
  // );

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(movieAction.getMovies());
  // }, []);
  return <div>영화디테일</div>;
};

export default MovieDetailPage;
