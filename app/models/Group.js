/**
 * 群组信息
 */
export default class Group {
	constructor(props) {
		if (props) {
			this.id = props.id;// 群组ID
			this.name = props.name;// 群组名称
			this.photo = props.photo; // 群组头像
			this.userId = props.userId; // 创建人
			this.masterId = props.masterId; // 群主
			this.createTime = props.createTime; // 群组
		}
	}
}