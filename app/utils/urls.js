// 接口服务器地址
 // const apiPath = 'http://103.254.113.11:8080/jkst2/'; // 外网
// const apiPath = 'http://192.168.10.69:8080/jkst2/'; // 内网服务器
 const apiPath = 'http://192.168.3.126:18080/fudao-svc/'; // 谢鹏
// const apiPath = 'http://192.168.3.241:8080/center/ifcuas/'; // txh
//  const apiPath = 'http://192.168.3.241:8080/center/ifcuas/'; // txh
http://192.168.10.69:8080/center/ajaxtest.jsp

// web服务器地址
const webPath = 'http://192.168.3.204:3000/';

// 认证服务器地址
const authPath = 'http://192.168.3.137:3000/';

// 图片服务器地址
const picPath = 'http://192.168.10.69:9191/';
// http://192.168.10.69:9191/api/ImgApi/getImage?req%EF%BC%9D&id=0&filePath=/uploadimg/867200022156895102484607.jpeg&w=0&h=0

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
		// 我的时间
		MY_TIME: webPath + 'myTime.html',
		// 健康测评
		HEALTH_APPRAISAL : webPath + 'healthAppraisal.html',
		// 测试题
		ASSESSMENT_TEST : webPath + 'assessmentTest.html',
		// 健康圈
		HEALTH_CIRCLE : webPath + 'healthCircle.html',
		// 生命周期
		LIFE_CYCLE : webPath + 'lifeCycle.html'
	},
	/**
	 *  接口
	 */
	apis: {
		// 图片接口
		IMAGE: picPath + 'api/ImgApi/getImage',

		// 资讯 ----------------------------------------------------------------------
		//资讯列表
		ARTICLE_LIST: apiPath + 'app/myTerritoryAction!list.action',
		//资讯详细
		ARTICLE_DETAIL: apiPath + 'app/myTerritoryAction!detail.action',
		//我的收藏列表, 参数（appid, page, pageSize）
		MY_COLLECTION_LIST: apiPath + 'app/collectionAction!getMyCollection.action',

		// 注册登录(老)
		//验证手机号
		CHECK_PHONE: apiPath + 'app/phoneVerificationAction!checkPhone.action',
		//验证验证码
		CHECK_CODE: apiPath + "app/accountInfoAction!registerBefore.action",
		REG: apiPath + "app/accountInfoAction!register.action",
	}
	 	LOGIN : apiPath + "app/accountInfoAction!login.action",

		// 注册登录(新)

		/*//检测用户是否存在
		CHECK_PHONE: apiPath + 'checkUserExists',
		//发送验证码
		SEND_CODE: apiPath + "sendMsg",
		//检测验证码
		CHECK_CODE: apiPath + "checkCodeIsOut",
		//用户注册
		REGISTER: apiPath + 'register',
		//用户登录
		LOGIN: apiPath + 'login',
		//修改用户信息
		SAVE_USERINFO: apiPath + 'saveUserInfo',
		//重设密码
		CHANGE_PASSWORD: apiPath + 'changePassword',
		//检测旧密码
		CHECK_PASSWORD: apiPath + 'checkPassword',
		//获取用户信息
		USER_INFO: apiPath + 'userinfo',*/

	},

	/**
	 *  test
	 */
	test: 'http://wordnet.infcn.com.cn/user/login?username=admin&password=admin',
	json: 'http://192.168.1.137:3000/data.json',
	login: 'http://192.168.10.9:7071/qdeMods/login',


};
export default urls;