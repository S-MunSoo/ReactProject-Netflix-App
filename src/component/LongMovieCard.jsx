import React from "react";
// 여러 무비페이지 정보
const LongMovieCard = ({ item }) => {
  console.log("item", item);
  return (
    <div
      className="long-card"
      style={{
        backgrounImage:
          "url(" +
          `https://image.tmdb.org/t/p/original//${item.backdrop_path}` +
          ")",
      }}
    >
      <div className="long-info">
        <img
          src={`https://image.tmdb.org/t/p/original//${item.poster_path}`}
          alt="posterImg"
        />
      </div>
    </div>
  );
};

export default LongMovieCard;
