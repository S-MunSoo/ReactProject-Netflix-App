let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovie,
        topRatedMovies: payload.topRatedMovie,
        upcomingMovies: payload.upcomingMovie,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
