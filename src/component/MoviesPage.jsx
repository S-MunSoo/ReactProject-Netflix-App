import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MoviePageNation from "./MoviePageNation";

const MoviesPage = ({ moviesA }) => {
  return (
    <div>
      <Container className="movie-page-img">
        <Row>
          {moviesA.results &&
            moviesA.results.map((item) => (
              <Col key={item.id} lg={5}>
                <img
                  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
                  alt=""
                />
              </Col>
            ))}
          <MoviePageNation item={moviesA} />
        </Row>
      </Container>
    </div>
  );
};

export default MoviesPage;
