import DetailBanner from "../component/DetailBanner";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MovieDetailPage = () => {
  let { id } = useParams();
  console.log("id", id);
  // const detailMovie = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  // const getMovies = (id) => {
  //   dispatch(movieAction.getMovies(id));
  // };
  // useEffect(() => {
  //   getMovies();
  // }, []);

  return (
    <div>
      <DetailBanner />
    </div>
  );
};

export default MovieDetailPage;
