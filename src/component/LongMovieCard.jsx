import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
import moment from "moment";
// 여러 무비페이지 정보
const LongMovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { genreList } = useSelector((state) => state.movie);
  // console.log("genreList", genreList);
  const longMovieClick = () => {
    navigate(`/Movie/${item.id}`);
  };

  return (
    <div
      onClick={longMovieClick}
      className="long-card"
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/original//${item.backdrop_path}` +
          ")",
      }}
    >
      <div className="long-info">
        <div className="long-title">
          <img
            src={`https://image.tmdb.org/t/p/original//${item.poster_path}`}
            alt="posterImg"
          />
          <h2>{item.title}</h2>
        </div>
        <div className="long-date">
          {moment(item.release_date).format("LL")}
        </div>
        {item.genre_ids?.map((id) => (
          <Badge bg="danger" className="badge" key={id}>
            {genreList.find((item) => item.id === id)?.name}
          </Badge>
        ))}
        <div className="long-overview">{item.overview}</div>
        <div className="long-count">
          <div>⭐ {item.vote_average}</div>
          <div style={{ marginLeft: "14px" }}>👥 {item.popularity}</div>
          <div>
            <Badge pill bg="danger" className="count__badge">
              {item.adult ? "청불" : "전체관람"}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongMovieCard;
