import {combineReducers} from "redux";
import drawer from "./drawer";
import position from "./position";
import realm from "./realm";
import search from "./search";
import dynamic from "./dynamic";
import loading from "./loading";
import user from "./user";
import friend from "./friend";
import settings from "./settings";

export default combineReducers({
	drawer,
	position,
	realm,
	search,
	dynamic,
	loading,
	user,
	friend,
	settings,
});
