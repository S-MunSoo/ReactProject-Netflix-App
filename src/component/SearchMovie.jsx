import React from "react";
import LongMovieCard from "./LongMovieCard";
import { Row, Col } from "react-bootstrap";
// movie 페이지 검색 및 정렬
const SearchMovie = ({ sortMovie, genreList }) => {
  return (
    <Row>
      <Col>
        {sortMovie.results &&
          sortMovie.results.map((item) => (
            <LongMovieCard item={item} key={item.id} />
          ))}
      </Col>
    </Row>
  );
};

export default SearchMovie;
