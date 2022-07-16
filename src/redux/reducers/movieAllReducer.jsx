let initialState = {
  allMovie: [],
};

function movieAllReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIE_All":
      return { ...state, allMovie: payload.allMovie };
    default:
      return { ...state };
  }
}
export default movieAllReducer;
