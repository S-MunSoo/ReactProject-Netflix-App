import React from "react";
import Pagination from "react-js-pagination";
import { useState } from "react";

const MoviePageNation = ({ item }) => {
  console.log("item", item);
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div>
      <Pagination
        activePage={item.page}
        itemsCountPerPage={10}
        totalItemsCount={item.total_results}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default MoviePageNation;
