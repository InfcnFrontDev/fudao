import {ToastAndroid} from "react-native";
import uuid from "uuid";
import pinyin from "./pinyin";
const tools = {
	/**
	 * 生成UUID
	 * @returns {*}
	 */
	uuid(){
		return uuid.v1();
	},

	/**
	 * 获得拼音
	 * @param str
	 */
	pinyin(str){
		return pinyin.getFullChars(str);
	},

	/**
	 * 获取首字母
	 * @param str
	 */
	getFirstChar(str){
		return pinyin.getFullChars(str).substring(0, 1);
	},

	/**
	 * ToastAndroid.show
	 * @param text
	 */
	toast(text){
		ToastAndroid.show(text, ToastAndroid.SHORT);
	}
};
export default tools;