import {combineReducers} from "redux";
import drawer from "./drawer";
import realm from "./realm";
import search from "./search";
import account from "./user";
import friends from "./friends";

export default combineReducers({
	drawer,
	realm,
	search,
	account,
	friends,
});
