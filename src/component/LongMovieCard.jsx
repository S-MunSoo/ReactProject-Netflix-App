import React from "react";
// 여러 무비페이지 정보
const LongMovieCard = ({ item }) => {
  console.log("item", item);
  return (
    <div
      style={{
        backgrounImage:
          "url(" +
          `https://image.tmdb.org/t/p/original//${item.backdrop_path}` +
          ")",
      }}
    >
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original//${item.poster_path}`}
          width={300}
          height={400}
          alt="posterImg"
        />
      </div>
    </div>
  );
};

export default LongMovieCard;
