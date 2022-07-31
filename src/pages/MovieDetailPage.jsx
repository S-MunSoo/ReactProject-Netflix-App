import DetailBanner from "../component/DetailBanner";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { detailAction } from "../redux/actions/detailAction";
import DetailCard from "../component/DetailCard";
import MovieReview from "../component/MovieReview";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "../component/Footer";

const MovieDetailPage = () => {
  let { id } = useParams();
  const movieDetail = useSelector((state) => state.detailMovie);
  // console.log("movieDetail???", movieDetail.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailAction.getMovieDetail(id));
  }, []);

  if (movieDetail.loading) {
    return (
      <div className="detail-loading">
        <ClipLoader color="#B22222" loading={movieDetail.loading} size={150} />
      </div>
    );
  } else {
    return (
      <div className="detail-home">
        <DetailBanner />
        <DetailCard detail={movieDetail} youtube={movieDetail.movieYoutube} />
        <MovieReview
          review={movieDetail.movieReviews}
          related={movieDetail.movieRelated}
          item={movieDetail.movieRelated.results}
        />
        <Footer />
      </div>
    );
  }
};

export default MovieDetailPage;
