/**
 * 动态的图片信息
 */
export default class DynamicPicture {
	constructor(props) {
		if (props) {
			this.id = props.id; // 图片ID
			this.dynamicId = props.dynamicId;// 动态ID
			this.path = props.path; // 图片路径
		}
	}
}