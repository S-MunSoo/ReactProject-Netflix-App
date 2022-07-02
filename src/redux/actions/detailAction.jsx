import api from "../reducers/api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovieDetail(id) {
  return async (dispatch) => {
    const popularDetailApi = api.get(
      `/movie/${id}popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const topRatedDetailApi = api.get(
      `/movie/${id}top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const upcomingDetailApi = api.get(
      `/movie/${id}upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );

    let [popularDetail, topRatedDetail, upcomingDetail] = await Promise.all([
      popularDetailApi,
      topRatedDetailApi,
      upcomingDetailApi,
    ]);
    console.log(popularDetail, topRatedDetail, upcomingDetail);

    dispatch({
      type: "GET_MOVIES_DETAIL",
      payload: {
        popularDetail: popularDetail.data,
        topRatedDetail: topRatedDetail.data,
        upcomingDetail: upcomingDetail.data,
      },
    });
  };
}
export const detailAction = { getMovieDetail };
