let initialState = {
  popularDetail: {},
  topRatedDetail: {},
  upcomingDetail: {},
  genreDetail: [],
  movieYoutube: [],
  movieReviews: [],
  movieRelated: [],
  loading: true,
};

function detailReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_DETAIL_REQUEST":
      return { ...state, loading: true };

    case "GET_MOVIES_DETAIL":
      return {
        ...state,
        popularDetail: payload.popularDetail,
        topRatedDetail: payload.topRatedDetail,
        upcomingDetail: payload.upcomingDetail,
        genreDetail: payload.genreDetail,
        movieYoutube: payload.movieYoutube,
        movieReviews: payload.movieReviews,
        movieRelated: payload.movieRelated,
        loading: false,
      };
    case "GET_DETAIL_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}
export default detailReducer;
