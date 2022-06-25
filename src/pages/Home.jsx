import React from "react";
import { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Banner from "../component/Banner";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );
  console.log("home???", popularMovies, topRatedMovies, upcomingMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <div>
      {/* 조건부 랜더링 uesEffect는 한번만 호출할 수 잇기때문에 */}
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
    </div>
  );
};

export default Home;
