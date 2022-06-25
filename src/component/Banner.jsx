import React from "react";

const Banner = ({ movie }) => {
  console.log("Banner movie???", movie);
  return (
    <div
      className="Banner"
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
          ")",
      }}
    >
      <div className="Banner-title">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
