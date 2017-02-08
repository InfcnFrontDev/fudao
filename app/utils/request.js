'use strict';
import {Alert} from "react-native";

export default function request({url, data, method = 'GET'}) {
	fetch(url, {method, body: JSON.stringify(data)})
		.then(response => response.json()) //把response转为json
		.then(responseData => { // 上面的转好的json
			Alert.alert(responseData);
		})
		.catch((error)=> {
			Alert.alert('错误了');
		})
}
