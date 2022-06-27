import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}` +
          ")",
      }}
    >
      <div className="over-lay">
        <h1 className="card-title">{item.title}</h1>
        <div>
          {item.genre_ids.map((id) => (
            <Badge bg="dark">
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <div className="card-info">
          <span>평점 : {item.vote_average}</span>
          <Badge pill bg="danger">
            {item.adult ? "청불" : "전체관람"}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
