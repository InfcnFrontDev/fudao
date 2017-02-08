/**
 * 群组成员
 */
export default class GroupMember {
	constructor(props) {
		if (props) {
			this.id = props.id; // 群组成员ID
			this.groupId = props.groupId;// 群组ID
			this.userId = props.userId;// 用户ID
			this.createTime = this.createTime; // 加入群的时间
		}
	}
}