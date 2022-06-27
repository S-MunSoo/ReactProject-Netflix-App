import React from "react";
import { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Banner from "../component/Banner";
import MovieSlide from "../component/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  console.log("home???", popularMovies, topRatedMovies, upcomingMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  // 로딩이 true면 로딩스피너를 안 보여주고
  // 로딩이 펄스면 데이터를 보여준다.
  // true : 데이터 도착전
  // falsee : 데이터 도착 후 or err

  if (loading) {
    console.log("로당", loading);
    return <ClipLoader color="#B22222" loading={loading} size={150} />;
  } else {
    return (
      <div>
        {/* 조건부 랜더링 uesEffect는 한번만 호출할 수 잇기때문에 */}
        <Banner movie={popularMovies.results[0]} />
        <div className="Home-section">
          <h1>Popular Movies</h1>
          <MovieSlide movies={popularMovies} />
          <h1>TopRated Movies</h1>
          <MovieSlide movies={topRatedMovies} />
          <h1>Upcoming Movies</h1>
          <MovieSlide movies={upcomingMovies} />
        </div>
      </div>
    );
  }
};

export default Home;
