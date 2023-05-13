import { combineReducers } from "redux";
import gistReducer from "./gist/gistReducer";

const rootReducer = combineReducers({
  gistReducer,
});

export default rootReducer;
