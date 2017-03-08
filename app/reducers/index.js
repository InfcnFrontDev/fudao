import {combineReducers} from "redux";
import drawer from "./drawer";
import realm from "./realm";
import search from "./search";
import user from "./user";
import friend from "./friend";

export default combineReducers({
	drawer,
	realm,
	search,
	userStore: user,
	friend,
});
