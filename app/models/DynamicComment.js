/**
 * 动态的评论信息
 */
export default class DynamicComment {
	constructor(props) {
		if (props) {
			this.id = props.id;// 评论ID
			this.dynamicId = props.dynamicId; // 动态ID
			this.userId = props.userId; // 评论用户ID
			this.content = props.content;// 评论内容
			this.atUserId = props.atUserId; // @用户ID
			this.commentTime = props.commentTime;// 评论时间
			this.status = props.status; // 状态
		}
	}
}