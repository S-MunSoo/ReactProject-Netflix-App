import DetailBanner from "../component/DetailBanner";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { detailAction } from "../redux/actions/detailAction";
import DetailCard from "../component/DetailCard";
import MovieReview from "../component/MovieReview";

const MovieDetailPage = () => {
  let { id } = useParams();

  // const [related, setRelated] = useState("");
  const movieDetail = useSelector((state) => state.detailMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailAction.getMovieDetail(id));
  }, []);

  // useEffect(() => {
  //   console.log("related", related);
  // }, [related]);

  return (
    <div className="detail-home">
      <DetailBanner />
      <DetailCard detail={movieDetail} youtube={movieDetail.movieYoutube} />
      <MovieReview
        review={movieDetail.movieReviews}
        related={movieDetail.movieRelated}
      />
    </div>
  );
};

export default MovieDetailPage;
