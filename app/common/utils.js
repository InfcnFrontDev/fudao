import {ToastAndroid} from "react-native";
import DialogAndroid from "react-native-dialogs";
import uuid from "uuid";
import config from "./config";
const tools = {
	/**
	 * 生成UUID
	 * @returns {*}
	 */
	uuid(){
		return uuid.v1();
	},

	/**
	 * 延迟加载
	 */
	delayLoad(callback){
		setTimeout(callback, config.loadingDelayTime)
	},

	/**
	 * ToastAndroid.show
	 * @param text
	 */
	showToast(text){
		ToastAndroid.show(text, ToastAndroid.SHORT);
	},

	showDialog(options){
		var dialog = new DialogAndroid();
		dialog.set(options);
		dialog.show();
	}


};
export default tools;