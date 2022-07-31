import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import SearchMovie from "../component/SearchMovie";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "react-js-pagination";
const Movie = () => {
  const [page, setPage] = useState(1);
  // const [sortTitle, setSortTitle] = useState("");
  // const [query, setQuery] = useSearchParams();
  // let keyword = query.get("query");
  const dispatch = useDispatch();
  const { sortMovie, loading, genreList } = useSelector((state) => state.movie);

  console.log("sortMovie", sortMovie);

  // 페이지 네이션
  const pageHandlerChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    dispatch(movieAction.getMovies(page));
  }, [page]);

  return (
    <Container>
      <Row>
        <Col>
          <SearchMovie sortMovie={sortMovie} genreList={genreList} />
        </Col>
        <div>
          <Pagination
            activePage={page}
            hideDisabled={true}
            itemsCountPerPage={20}
            totalItemsCount={10000}
            pageRangeDisplayed={5}
            onChange={pageHandlerChange}
          />
        </div>
      </Row>
    </Container>
  );
};

export default Movie;
