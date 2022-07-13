import api from "../reducers/api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovieDetail(id) {
  return async (dispatch) => {
    dispatch({ type: "GET_DETAIL_REQUEST" });
    try {
      const popularDetailApi = api.get(
        `/movie/${id}popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRatedDetailApi = api.get(
        `/movie/${id}top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upcomingDetailApi = api.get(
        `/movie/${id}upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreDetailApi = api.get(
        `genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      const movieYoutubeApi = api.get(
        `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      const movieReviewApi = api.get(
        `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );
      const movieRelatedApi = api.get(
        `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      );
      let [
        popularDetail,
        topRatedDetail,
        upcomingDetail,
        genreDetail,
        movieYoutube,
        movieReviews,
        movieRelated,
      ] = await Promise.all([
        popularDetailApi,
        topRatedDetailApi,
        upcomingDetailApi,
        genreDetailApi,
        movieYoutubeApi,
        movieReviewApi,
        movieRelatedApi,
      ]);

      dispatch({
        type: "GET_MOVIES_DETAIL",
        payload: {
          popularDetail: popularDetail.data,
          topRatedDetail: topRatedDetail.data,
          upcomingDetail: upcomingDetail.data,
          genreDetail: genreDetail.data,
          movieYoutube: movieYoutube.data,
          movieReviews: movieReviews.data,
          movieRelated: movieRelated.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_DETAIL_FAILURE" });
    }
  };
}
export const detailAction = { getMovieDetail };
// console.log(
//   "movieAPITest ",
//   popularDetail,
//   topRatedDetail,
//   upcomingDetail,
//   movieYoutube,
//   movieReviews,
//   movieRelated
// );
