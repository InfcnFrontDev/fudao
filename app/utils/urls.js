// 接口服务器地址
// const apiPath = 'http://103.254.113.11:8080/jkst2/'; // 外网
// const apiPath = 'http://192.168.10.69:8080/jkst2/'; // 内网服务器
const apiPath = 'http://192.168.3.126:18080/fudao-svc/'; // 谢鹏

// web服务器地址
const webPath = 'http://192.168.3.137:3000/';

// 认证服务器地址
const authPath = 'http://192.168.3.137:3000/';

// 图片服务器地址
const picPath = 'http://192.168.10.61:8080/jkst2/';

const urls = {
	apiPath,
	picPath,
	authPath,
	webPath,

	/**
	 *  页面
	 */
	pages: {
		// 隐式声明
		DECLARE: webPath + 'declare.html',
		// 用户协议
		PROTOCOL: webPath + 'protocol.html',
		// 资讯详细
		ARTICLE_DETAIL: webPath + 'articleDetail.html',
	},
	/**
	 *  接口
	 */
	apis: {
		// 资讯 ----------------------------------------------------------------------
		//资讯列表
		ARTICLE_LIST: apiPath + 'app/myTerritoryAction!list.action',
		//资讯详细
		ARTICLE_DETAIL: apiPath + 'app/myTerritoryAction!detail.action',

		// 注册登录
		CHECK_PHONE: apiPath + 'app/phoneVerificationAction!checkPhone.action',
		CHECK_CODE: apiPath + "app/accountInfoAction!registerBefore.action",
		REG: apiPath + "app/accountInfoAction!register.action",
	}
};
export default urls;