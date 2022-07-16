import api from "../reducers/api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getAllMovie() {
  return async (dispatch) => {
    const getMovieAllApi = api.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=10`
    );

    let allPage = await Promise.all([getMovieAllApi]);

    console.log("allMovie???", allPage);
    dispatch({
      type: "GET_MOVIE_All",
      payload: { allMovie: allPage.data },
    });
  };
}

export const movieAllAction = { getAllMovie };
