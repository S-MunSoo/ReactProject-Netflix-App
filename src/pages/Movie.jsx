import React from "react";
import { useEffect, useState, useSearchParams } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import SearchMovie from "../component/SearchMovie";
import { Container, Row, Col } from "react-bootstrap";

const Movie = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useSearchParams();
  let keyword = query.get("query");

  const dispatch = useDispatch();
  const { genreList, searchMovie } = useSelector((state) => state.movie);
  console.log(searchMovie);
  useEffect(() => {
    dispatch(movieAction.getMovies(keyword, page));
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <SearchMovie
            searchMovie={searchMovie}
            genreList={genreList}
            keyword={keyword}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Movie;
