/**
 * 聊天消息
 */
export default class ChatMessage {
	constructor(props) {
		if (props) {
			this.id = props.id;// 消息ID
			this.chatId = props.chatId; // 聊天ID
			this.userId = props.userId;// 发送人
			this.content = props.content;// 消息内容
			this.type = props.type;// 消息类型，1文本、2图片、3链接、4视频、5语音
			this.sendTime = props.sendTime;// 发送时间
			this.status = props.status;// 消息状态
		}
	}
}