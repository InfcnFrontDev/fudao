import {ToastAndroid} from "react-native";
const toast = {
	/**
	 * ToastAndroid.show
	 * @param text
	 */
	show(text){
		ToastAndroid.show(text, ToastAndroid.SHORT);
	}
};
export default toast;