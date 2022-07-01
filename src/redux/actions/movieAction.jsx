import api from "../reducers/api";

// action 미들웨어
// 미들웨어는 함수를 리턴한다 함수(dispatch , getState)
// .env 파일에 API 보호 하여 이용
const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies(id) {
  return async (dispatch) => {
    try {
      // 데이터 도착 전 로딩 true
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upcomingApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreApi = api.get(
        `genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      // Promise.all([]) : 여러 API를 동시에 병력적으로 한번만 불러주게 해준다.
      let [popular, topRated, upcoming, genreList] = await Promise.all([
        popularMovieApi,
        topRatedApi,
        upcomingApi,
        genreApi,
      ]);
      // console.log("장르리스트", genreList);
      // console.log("popularMovie????", popular);
      // console.log("topRated", topRated);
      // console.log("upcoming", upcoming);
      // 로딩 데이터 도착 후 false
      dispatch({
        type: "GET_MOVIE_SUCCESS",
        payload: {
          popularMovie: popular.data,
          topRatedMovie: topRated.data,
          upcomingMovie: upcoming.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      // 에러 핸들링
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

export const movieAction = { getMovies };
