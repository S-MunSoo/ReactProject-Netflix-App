// import api from "../reducers/api";

// const API_KEY = process.env.REACT_APP_API_KEY;
// function getMovieDetail() {
//   return async (dispatch) => {
//     dispatch({ type: "GET_MOVIES_DETAIL" });
//     const popularMovieApi = api.get(
//       `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
//     );
//     const topRatedApi = api.get(
//       `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
//     );
//     const upcomingApi = api.get(
//       `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
//     );

//     let [popularDetail, topRatedDetail, upcomingDetail] = await Promise.all([
//       popularMovieApi,
//       topRatedApi,
//       upcomingApi,
//     ]);
//   };
// }
// export const detailAction = { getMovieDetail };
