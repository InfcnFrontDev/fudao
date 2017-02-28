import {combineReducers} from "redux";
import drawer from "./drawer";
import realm from "./realm";
import search from "./search";

export default combineReducers({
	drawer,
	realm,
	search
});
