let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  loading: true,
  genreList: [],
  searchMovie: {},
  sortMovie: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };

    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovie,
        topRatedMovies: payload.topRatedMovie,
        upcomingMovies: payload.upcomingMovie,
        loading: false, // 데이터를 보여줘야 하니까 로딩은 false
        genreList: payload.genreList,
        // searchMovie: payload.searchMovie,
        sortMovie: payload.sortMovie,
      };

    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}

export default movieReducer;
