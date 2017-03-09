import {combineReducers} from "redux";
import drawer from "./drawer";
import realm from "./realm";
import search from "./search";
import account from "./account";
import collection from "./collection";
import dynamic from "./dynamic";
import loading from "./loading";
import user from "./user";
import friend from "./friend";

export default combineReducers({
	drawer,
	realm,
	search,
	account,
	collection,
	dynamic
	loadingStore: loading,
	userStore: user,
	friendStore: friend,
});
