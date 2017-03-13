import {combineReducers} from "redux";
import drawer from "./drawer";
import realm from "./realm";
import search from "./search";
import dynamic from "./dynamic";
import loading from "./loading";
import user from "./user";
import friend from "./friend";
import settings from "./settings";

export default combineReducers({
	drawerStore: drawer,
	realm,
	search,
	dynamic,
	loadingStore: loading,
	userStore: user,
	friendStore: friend,
	settingsStore: settings,
});
