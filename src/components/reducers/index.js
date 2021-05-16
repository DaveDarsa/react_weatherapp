import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import uiDetailsReducer from "./uiDetailsReducer";

const rootReducer = combineReducers({
  weatherInfo: weatherReducer,
  uiDetails: uiDetailsReducer,
});
export default rootReducer;
