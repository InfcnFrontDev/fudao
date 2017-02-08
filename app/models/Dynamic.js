/**
 * 动态信息
 */
export default class Dynamic {
	constructor(props) {
		if (props) {
			this.id = props.id;// 动态ID
			this.userId = props.userId; // 发表人
			this.content = props.content;// 动态内容
			this.type = props.type; // 类型，1文字、2图片、3链接、4视频
			this.publishTime = props.publishTime;// 发表时间
		}
	}
}