let initialState = {
  popularDetail: {},
  topRatedDetail: {},
  upcomingDetail: {},
  genreDetail: [],
  movieYoutube: [],
  movieReviews: [],
};

function detailReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_DETAIL":
      return {
        ...state,
        popularDetail: payload.popularDetail,
        topRatedDetail: payload.topRatedDetail,
        upcomingDetail: payload.upcomingDetail,
        genreDetail: payload.genreDetail,
        movieYoutube: payload.movieYoutube,
        movieReviews: payload.movieReviews,
      };
    default:
      return { ...state };
  }
}
export default detailReducer;
