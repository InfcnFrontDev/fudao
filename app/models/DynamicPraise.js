/**
 * 动态的点赞信息
 */
export default class DynamicPraise {
	constructor(props) {
		if (props) {
			this.id = props.id; // 关系ID
			this.dynamicId = props.dynamicId; // 动态ID
			this.userId = props.userId;// 点赞人ID
			this.createTime = props.createTime; // 点赞时间
		}
	}
}