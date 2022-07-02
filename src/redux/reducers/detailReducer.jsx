let initialState = {
  popularDetail: {},
  topRatedDetail: {},
  upcomingDetail: {},
  genreDetail: [],
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
      };
    default:
      return { ...state };
  }
}
export default detailReducer;
