const apiPath = 'http://192.168.3.137:3000/';
const apiPath1 = 'http://103.254.113.11:8080/jkst2/';
const urls = {
	// 页面
	declare: apiPath + 'declare.html',
	protocol: apiPath + 'protocol.html',

	// test
	test: 'http://wordnet.infcn.com.cn/user/login?username=admin&password=admin',
	json: 'http://192.168.1.137:3000/data.json',
	login: 'http://192.168.10.9:7071/qdeMods/login',

	// 接口

	// 注册登录
	CHECKPHONE : apiPath1 +'app/phoneVerificationAction!checkPhone.action',
};
export default urls;