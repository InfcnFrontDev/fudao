/**
 * 我的联系人
 */
export default class MyContacts {
	constructor(props) {
		if (props) {
			this.id = props.id; // ID
			this.userId = props.userId; // 用户ID
			this.joinTime = props.joinTime; // 加为好友的时间

			this.remark = props.remark; // 备注名
			this.dontAttentionHim = props.dontAttentionHim; // 不关注他
			this.dontLetHimAttention = props.dontLetHimAttention; // 不让他关注
		}
	}
}