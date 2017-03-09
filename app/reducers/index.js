import {combineReducers} from "redux";
import drawer from "./drawer";
import realm from "./realm";
import search from "./search";
import account from "./account";
import collection from "./collection";
import dynamic from "./dynamic";

export default combineReducers({
	drawer,
	realm,
	search,
	account,
	collection,
	dynamic
});
