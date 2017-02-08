/**
 * 我的群组
 */
export default class MyGroup {
	constructor(props) {
		if (props) {
			this.id = props.id; // ID
			this.groupId = props.groupId; // 群组ID
			this.joinTime = props.joinTime; // 加入时间

			this.myRemarkInGroup = props.myRemarkInGroup; // 在群中我的备注
		}
	}
}