/**
 * 聊天信息
 */
export default class Chat {
	constructor(props) {
		if (props) {
			this.id = props.id;// 聊天ID
			this.type = props.type; // 聊天类型， 用户，群组
			this.userId = props.userId; // 用户ID
			this.groupId = props.groupId; // 群组ID
			this.status = props.status; // 状态
		}
	}
}