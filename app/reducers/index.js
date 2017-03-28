import {combineReducers} from "redux";
import position from "./position";
import realm from "./realm";
import search from "./search";
import dynamic from "./dynamic";
import loading from "./loading";
import user from "./user";
import friend from "./friend";
import settings from "./settings";
import question from "./question";
import expect from "./expect";
import emotion from "./emotion";

export default combineReducers({
	position,
	realm,
	search,
	dynamic,
	loading,
	user,
	friend,
	settings,
	question,
	expect,
	emotion,
});
