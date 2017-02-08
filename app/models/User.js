/**
 * 用户信息
 */
export default class User {
	constructor(props) {
		if (props) {
			this.id = props.id;// 用户ID
			this.username = props.username;// 用户名
			this.password = props.password;// 密码
			this.name = props.name; // 昵称
			this.sex = props.sex;// 性别
			this.photo = props.photo; // 头像
			this.phone = props.phone; // 手机号码
			this.department = props.department; // 部门
			this.address = props.address; // 地址
			this.sign = props.sign;// 个性签名
			this.cover = props.cover; // 主页封面
			this.createTime = props.createTime; // 创建时间
		}
	}
}