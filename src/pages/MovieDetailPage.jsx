import DetailBanner from "../component/DetailBanner";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { detailAction } from "../redux/actions/detailAction";
import DetailCard from "../component/DetailCard";

const MovieDetailPage = () => {
  let { id } = useParams();
  console.log("id", id);

  const movieDetail = useSelector((state) => state.detailMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailAction.getMovieDetail(id));
  }, []);

  return (
    <div className="detail-home">
      <DetailBanner />
      <DetailCard detail={movieDetail} />
    </div>
  );
};

export default MovieDetailPage;
