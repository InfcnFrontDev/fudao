import {combineReducers} from "redux";
import drawer from "./drawer";
import realm from "./realm";
import search from "./search";
import userReducer from "./user";
import friendReducer from "./friend";

export default combineReducers({
	drawer,
	realm,
	search,
	userStore: userReducer,
	friendStore: friendReducer,
});
