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
        popularMovies: payload.popular,
        topRatedMovies: payload.topRated,
        upcomingMovies: payload.upcoming,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
