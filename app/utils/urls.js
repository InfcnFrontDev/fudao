// 接口服务器地址
// const apiPath = 'http://103.254.113.11:8080/fudao-svc/'; // 外网
// const apiPath = 'http://192.168.10.69:8080/fudao-svc/'; // 内网服务器
const apiPath = 'http://192.168.3.126:18080/fudao-svc/'; // 谢鹏

// web服务器地址
const webPath = 'http://192.168.3.204:3000/';

// 图片服务器地址
const picPath = 'http://103.254.113.11:9191/';
// const picPath = 'http://192.168.10.69:9191/';

const urls = {
	apiPath,
	picPath,
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
		HEALTH_APPRAISAL: webPath + 'healthAppraisal.html',
		// 测试题
		ASSESSMENT_TEST: webPath + 'assessmentTest.html',
		// 健康圈
		HEALTH_CIRCLE: webPath + 'healthCircle.html',
		// 生命周期
		LIFE_CYCLE: webPath + 'lifeCycle.html',
		// 我的位置
		MY_LOCATION: webPath + 'myLocation.html'

	},
	/**
	 *  接口
	 */
	apis: {
		// 图片接口(ok)
		IMAGE: picPath + 'api/ImgApi/getImage',

		// 资讯 ----------------------------------------------------------------------
		//资讯列表(ok)
		ARTICLE_LIST: apiPath + 'app/myTerritoryAction!list.action',
		//资讯详细(ok)
		ARTICLE_DETAIL: apiPath + 'app/myTerritoryAction!detail.action',
		//我的收藏列表(ok)
		MY_COLLECTION_LIST: apiPath +  'app/collectionAction!getMyCollection.action',


		//获取用户信息
		USER_DETAIL: apiPath + 'app/accountInfoAction!getUserInformationByUserId.action',
		//修改用户信息
		USER_UPDATE: apiPath + 'app/userInformationAction!updateValue.action',
		//搜索用户
		USER_SEARCH: apiPath + 'app/friendDynamicAction!getUserByPhone.action',
		//申请加为好友
		FRIEND_APPLY: apiPath + 'app/friendDynamicAction!addFriend.action',
		//同意加为好友
		FRIEND_AGREE: apiPath + 'app/friendDynamicAction!editFriend.action',
		//好友申请列表
		FRIEND_APPLY_LIST: apiPath + 'app/friendDynamicAction!getWaitBeFriends.action',
		//我的好友列表
		MY_FRIENDS_LIST: apiPath + 'app/friendDynamicAction!getFriends.action',


		//搜索------------------------------------------------------------------------
		//全部搜索
		SEARCH_ALL: apiPath + 'app/searchAction!searchAll.action?type=woman&page=1&pageSize=10&keyword=',

		// 注册登录(老)
		//验证手机号
		AUTH_CHECK_PHONE: apiPath + 'app/phoneVerificationAction!checkPhone.action',
		//验证验证码

		AUTH_CHECK_CODE: apiPath + "app/accountInfoAction!registerBefore.action",
		//注册
		AUTH_REG: apiPath + "app/accountInfoAction!register.action",
		//登录
		AUTH_LOGIN : apiPath + "app/accountInfoAction!login.action",
		//设置新密码
		AUTH_NEW_PASSWORD : apiPath +"app/accountInfoAction!retrievePassword.action",
		//基本信息
		AUTH_USER_INFORMATION : apiPath +"app/userInformationAction!saveUserinformation.action",


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


		 	// 动态 ---------------------------------------------------------
			DYNAMIC_LIST:apiPath + 'app/friendDynamicAction!getDynamics.action',
			DYNAMIC_ADD_DYNAMIC:apiPath+'app/friendDynamicAction!addDynamic.action',
	}

};
export default urls;
