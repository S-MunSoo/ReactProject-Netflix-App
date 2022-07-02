import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetailPage from "./pages/MovieDetailPage";
import "./App.scss";
import Navigation from "./component/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

// 유저 스토리
// 유저는 배너를 볼 수 있다.
// 유저는 가장 인기있는 영화 리스트, 가장 평점 좋은 영화 리스트, 상영 예정작 리스트를 볼 수 있다.
// 각각의 영화 리스트는 슬라이드 형태로 넘길 수 있다.
// 유저는 영화에 마우스를 올려두면 영화의 제목과 장르, 평점, 인기도, 청불여부를 볼 수 있다.
// 유저는 영화 카드를 클릭하면 영화의 상세 정보를 볼 수 있다.
// 상세 정보에는 포스터, 영화 제목, 평점, 인기도 청불여부, 줄거리 요약, 예산, 날짜, 시간, 리뷰, 예고편, 관련영화 등이 있다.
// 유저는 영화를 검색할 수 있다.
// 유저는 영화를 인기도순으로 정렬할 수 있다.
// 유저는 장르별로 영화를 필터링 할 수 있다.
// 유저는 영화 날짜별로 필터링 할 수 있다.

// 프로젝트 구성 기획
// 1. 3개 페이지 구성(홈페이지,movie페이지,movieDetail 페이지) - 라우터
// 2. 홈페이지애서 사용자는 배너를 볼 수 있다
// 3. 3가지 section 영화정보를 볼 수 있다(popular , top rated , upcoming )
// 4. 각 영화에 마우스 호버시 , 영화 제목 장르 청불 리뷰 평점을 볼 수 있다.
// 5. 영화 섹션 슬라이드 구성
// 6. 영화 디테일 페이지에서 영화에 대한 디테일 정보를 볼 수 있다
// 7. trailer 누르면 예고편을 볼 수 있다.
// 8. 영화 리뷰 와 추천 관련된 영화를 볼 수 있다.
// 9. 영화 검색 가능
// 10. 영화 정렬 기능

// API_KEY : 95e798cbb20ba2f6e4471768f9024816
// url : https://api.themoviedb.org/3/movie/550?api_key=95e798cbb20ba2f6e4471768f9024816

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="/Movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
