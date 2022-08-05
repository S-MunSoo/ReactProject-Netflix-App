import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { useSearchParams, useNavigate } from "react-router-dom";
import SearchMovie from "../component/SearchMovie";
import Pagination from "react-js-pagination";
import Footer from "../component/Footer";
import ClipLoader from "react-spinners/ClipLoader";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import { hover } from "@testing-library/user-event/dist/hover";

const Movie = () => {
  const [page, setPage] = useState(1);
  const [sortTitle, setSortTitle] = useState("");
  const [query, setQuery] = useSearchParams();
  const navigate = useNavigate();
  let keyword = query.get("query");

  const dispatch = useDispatch();
  const { sortMovie, loading, genreList, searchMovie } = useSelector(
    (state) => state.movie
  );

  // 페이지 네이션
  const pageHandlerChange = (page) => {
    setPage(page);
  };

  // sort정렬
  const handleSelect = (eventKey) => {
    setSortTitle(eventKey);
    setPage(page);
    navigate(`/Movie`);
  };
  useEffect(() => {
    dispatch(movieAction.getMovies(page, keyword, sortTitle));
    window.scrollTo(0, 0);
  }, [page, keyword, sortTitle]);

  if (loading) {
    return (
      <div className="movie-loading">
        <ClipLoader color="#B22222" loading={loading} size={150} />
      </div>
    );
  } else {
    return (
      <div id="movie-back">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span style={{ fontSize: "18px", fontWeight: "800" }}>Sort</span>
            </Accordion.Header>
            <Accordion.Body>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#e50914",
                }}
              >
                Sort Resluts By
              </div>
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="danger" id="dropdown">
                  {sortTitle}
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item eventKey="popularity.desc">
                    Popularity(desc)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="popularity.asc">
                    Popularity(asc)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="release_date.desc">
                    Release Day(desc)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="release_date.asc">
                    Release Day(asc)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="vote_average.desc">
                    Vote(desc)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="vote_average.asc">
                    Vote(asc)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="revenue.desc">
                    Revenue(desc)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="revenue.asc">
                    Revenue(asc)
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <SearchMovie
          sortMovie={sortMovie}
          genreList={genreList}
          searchMovie={searchMovie}
          keyword={keyword}
        />
        <div className="moive-naviton">
          <Pagination
            activePage={page}
            hideDisabled={true}
            itemsCountPerPage={20}
            totalItemsCount={10000}
            pageRangeDisplayed={5}
            onChange={pageHandlerChange}
          />
        </div>
        <Footer />
      </div>
    );
  }
};

export default Movie;
