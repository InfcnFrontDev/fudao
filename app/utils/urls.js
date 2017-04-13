// 接口服务器地址

// const apiPath = 'http://103.254.113.11:8080/fudao-svc/'; // 外网
// const apiPath = 'http://192.168.10.69:9191/api'; // 内网服务器
const apiPath = 'http://103.254.113.11:9191/api'; // 外网
// const apiPath = 'http://192.168.10.69:9191/api'; // 内网

// web服务器地址
const webPath = 'http://103.254.113.11:9191/web'; // 外网
// const webPath = 'http://192.168.10.69:9191/web'; // 内网
// const webPath = 'http://192.168.3.137:3000/'; // 杨可可
// const webPath = 'http://192.168.3.204:3000/'; // 王朋
//  const webPath = 'http://192.168.3.203:3000/'; //
// 图片服务器地址
// const picPath = 'http://103.254.113.11:9191/'; // 外网

 // const picPath = 'http://192.168.10.69:9191/'; // 内网


const urls = {
	apiPath,
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
		ARTICLE_GETARTICLE: webPath + 'articleDetail.html',
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
		// ??????
		MY_QUESTION_PERSON: webPath + 'myQuestionPerson.html',
		// 我的位置
		MY_LOCATION: webPath + 'myLocation.html',
		//首页
		HOEM: webPath + 'home.html',
		//我的能量场
		MY_ENERGY: webPath + 'myEnergy.html'
	},
	/**
	 *  接口
	 */
	apis: {
		// 图片接口(ok)
		IMAGE: apiPath + '/ImgApi/getImage',
		IMAGE_UPLOAD: apiPath + '/ImgApi/upload',


		//天气-------------------------------------------------------------------------
		WEATHER:apiPath +'/app/weatherAction!getWeather.action',

		// 资讯 ----------------------------------------------------------------------

		//资讯列表
		ARTICLE_GETARTICLELIST: apiPath + '/ArticleApi/getArticleList',
		//资讯详细
		ARTICLE_GETARTICLE: apiPath + '/ArticleApi/getArticle',


		// 我的收藏 ----------------------------------------------------------------------

		//我的收藏列表
		MY_COLLECTION_LIST: apiPath + 'app/collectionAction!getMyCollection.action',
		//删除(取消)我的收藏
		MY_COLLECTION_DELETE: apiPath + 'app/collectionAction!delMyCollection.action',


		//获取用户信息
		USER_DETAIL: apiPath + 'app/accountInfoAction!getUserInformationByUserId.action',
		//修改用户信息
		USER_UPDATE: apiPath + 'app/userInformationAction!updateValue.action',
		//搜索用户
		USER_SEARCH: apiPath + 'app/friendDynamicAction!getUserByPhone.action',
		//修改用户体检信息
		USER_CHECK: apiPath + 'app/userInformationAction!updateResult.action',

		// 好友 ----------------------------------------------------------------------

		//申请加为好友
		FRIEND_APPLY: apiPath + 'app/friendDynamicAction!addFriend.action',
		//同意加为好友
		FRIEND_AGREE: apiPath + 'app/friendDynamicAction!editFriend.action',
		//好友申请列表
		FRIEND_APPLY_LIST: apiPath + 'app/friendDynamicAction!getWaitBeFriends.action',
		//删除好友
		FRIEND_DELETE: apiPath + 'app/friendDynamicAction!deleteFriend.action',
		//我的好友列表
		MY_FRIENDS_LIST: apiPath + 'app/friendDynamicAction!getFriends.action',


		//搜索------------------------------------------------------------------------
		//全部搜索
		SEARCH_ALL: apiPath + 'app/searchAction!searchAll.action?type=woman&page=1&pageSize=5',

		// 注册登录(老)
		//验证手机号
		USER_CHECKPHONEREGISTERED: apiPath + '/UserApi/checkPhoneRegistered',
		//验证验证码

		AUTH_CHECK_CODE: apiPath + "app/accountInfoAction!registerBefore.action",
		//注册
		AUTH_REG: apiPath + "app/accountInfoAction!register.action",
		//登录
		USER_LOGIN: apiPath + "/UserApi/login",
		//设置新密码
		AUTH_NEW_PASSWORD: apiPath + "app/accountInfoAction!retrievePassword.action",
		//基本信息
		AUTH_USER_INFORMATION: apiPath + "app/userInformationAction!saveUserinformation.action",
		//情绪
		EMOTION_GETEMOTIONINTERVENE: apiPath + "/EmotionApi/getEmotionIntervene",

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
		//动态列表
		DYNAMIC_LIST: apiPath + 'app/friendDynamicAction!getDynamics.action',
		//添加动态
		DYNAMIC_ADD_DYNAMIC: apiPath + 'app/friendDynamicAction!addDynamic.action',
		//删除动态
		DYNAMIC_DELETE_DYNAMIC: apiPath + 'app/friendDynamicAction!deleteDynamic.action',
		//添加评论
		DYNAMIC_ADD_COMMENT: apiPath + 'app/friendDynamicAction!addDynamicComment.action',
		//点赞
		DYNAMIC_ADD_PRAISE: apiPath + 'app/friendDynamicAction!addDynamicPraise.action',
		//取消点赞
		DYNAMIC_DELETE_PRAISE: apiPath + 'app/friendDynamicAction!deleteDynamicPraiseByUserIdAndDynamicId.action',

		// 我的问题 ---------------------------------------------------------
		//所有问题
		DISEASE_GETALLDISEASELIST: apiPath + '/DiseaseApi/getMyDiseaseList',
		//用户问题
		DISEASE_GETMYDISEASELIST: apiPath + '/DiseaseApi/getMyDiseaseList',
        //添加我的问题
		DISEASE_ADDMYDISEASE: apiPath + '/DiseaseApi/addMyDisease',
        //删除用户问题
		DISEASE_DELETEMYDISEASE: apiPath + '/DiseaseApi/deleteMyDisease',
        //问题日常疗法
        DISEASE_GETDISEASEDAILYMETHODDETAIL: apiPath + '/DiseaseApi/getDiseaseDailyMethodList',
		//问题专业疗法
        DISEASE_GETDISEASEPROFESSIONALMETHODLIST: apiPath + '/DiseaseApi/getDiseaseProfessionalMethodList',
       //获取食材
		INGREDIENT_GETINGREDIENT: apiPath + '/IngredientApi/getIngredient',
		//获取菜品列表
		COOKBOOK_GETCOOKBOOKLIST: apiPath + '/CookbookApi/getCookbookList',
		//获取菜品详细
		COOKBOOK_GETCOOKBOOK: apiPath + '/CookbookApi/getCookbook',


		// 我的期望 ---------------------------------------------------------
		//所有期望
		EXPECT_ALL_EXPECT_LIST: apiPath + 'app/zixiuAction!findZixiuPartContainsProject.action',
		//用户期望
		EXPECT_USER_EXPECT_LIST: apiPath + 'app/zixiuAction!getZixiuProjectsByUserId.action',
		//添加用户期望
		EXPECT_ADD_USER_EXPECT: apiPath + 'app/zixiuAction!addMyZixiu.action',
		//删除用户期望
		EXPECT_REMOVE_USER_EXPECT: apiPath + 'app/zixiuAction!deleteMyZixiu.action',
		//删除用户期望
		MY_EXPECT_TREETMENT: apiPath + 'app/zixiuAction!findZixiuTherapy.action',

		// 我的能量场 ---------------------------------------------------------
		MY_ENEGRYMY_ACTION_INFORMATION: apiPath +'app/myEnergyAction!informationData.action'//?appid=1
	},

	// 获取图片完整路径
	getImage(filePath, width, height){
		let url = this.apis.IMAGE + '?filePath=' + filePath;
		if (width)
			url += '&w=' + width;
		if (height)
			url += '&h=' + height;
		// console.log(url);
		return url;
	}

};
export default urls;
