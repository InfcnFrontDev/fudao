import React, {Component} from "react";
import {StyleSheet, Text, Alert, ToastAndroid} from "react-native";
import {connect} from "react-redux";
import {receiveMessageListResult} from '../actions/messageList'

class Socket extends Component {
	constructor(props) {
		super(props);

		const {dispatch} = props;

		var ws = new WebSocket('ws://192.168.10.58:9096/ws');

		ws.onopen = () => {
			// 打开一个连接
			ws.send(JSON.stringify({
				"messageId": "12312",
				"methodName": "longConn",
				"arguments": ["ba242927-8d9e-4bdf-bcf7-fbd6f4ae2b4e"],
				"className": "LoginAction"
			})); // 发送一个消息
		};

		ws.onmessage = (e) => {
			// 接收到了一个消息
			console.log(e.data);
			ToastAndroid.show(e.data, ToastAndroid.SHORT);
			dispatch(receiveMessageListResult(e.data, e.type));
		};

		ws.onerror = (e) => {
			// 发生了一个错误
			console.log(e.message);
			ToastAndroid.show(e.message, ToastAndroid.LONG);
		};

		ws.onclose = (e) => {
			// 连接被关闭了
			console.log(e.code, e.reason);
			ToastAndroid.show(e.reason, ToastAndroid.SHORT);
		};
	}

	render() {
		return null
	}
}

function mapStateToProps(state) {
	const {messageList} = state;
	return {
		messageList
	}
}
export default connect(mapStateToProps)(Socket)