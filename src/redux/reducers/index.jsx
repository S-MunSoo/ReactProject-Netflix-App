// 컴바인
import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import detailReducer from "./detailReducer";
import movieAllReducer from "./movieAllReducer";

export default combineReducers({
  movie: movieReducer,
  detailMovie: detailReducer,
  allMovie: movieAllReducer,
});
