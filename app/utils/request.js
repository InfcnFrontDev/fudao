/**
 * network request
 */
const request = {

	/**
	 * GET请求，返回Json数据。
	 *
	 * 支持方法重载：
	 * getJson(url, callback)
	 * getJson(url, params, callback)
	 *
	 * @param url 请求地址，type：string
	 * @param params 请求类型，type：json
	 * @param callback 回调方法， type: function
	 */
	getJson(url, params, callback){
		let len = arguments.length;
		if (len <= 1) {
			console.error('arguments length mismatch.');
		} else if (len == 2) {
			this.fetchGet(url, null, params, 'json');
		} else {
			this.fetchGet(url, params, callback, 'json');
		}
	},


	/**
	 * GET请求，返回Text数据。
	 *
	 * 支持方法重载：
	 * getText(url, callback)
	 * getText(url, params, callback)
	 *
	 * @param url 请求地址，type：string
	 * @param params 请求类型，type：json
	 * @param callback 回调方法， type: function
	 */
	getText(url, params, callback){
		let len = arguments.length;
		if (len <= 1) {
			console.error('arguments length mismatch.');
		} else if (len == 2) {
			this.fetchGet(url, null, params, 'text');
		} else {
			this.fetchGet(url, params, callback, 'text');
		}
	},

	fetchGet(url, params, callback, type){
		if (params) {
			let paramsArray = []
			Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
			if (url.search(/\?/) === -1) {
				url += '?' + paramsArray.join('&')
			} else {
				url += '&' + paramsArray.join('&')
			}
		}

		console.log('GET:' + url);

		fetch(url, {
			method: 'GET',
			headers: {
				'Cache-Control': 'no-cache',
			}
		})
			.then((response) => {
				if (type == 'text') {
					return response.text();
				}
				return response.json();
			})
			.then((responseData) => callback(responseData))
			.catch((error) => {
				console.error(error);
				alert('get error');
			})
			.done();
	},

	/**
	 * POST请求，返回Json数据。
	 *
	 * 支持方法重载：
	 * postJson(url, callback)
	 * postJson(url, body, callback)
	 * postJson(url, headers, body, callback)
	 *
	 * @param url 请求地址，type：string
	 * @param headers 请求头，type：json
	 * @param body 请求类型，type：string or json
	 * @param callback 回调方法， type: function
	 */
	postJson(url, headers, body, callback){
		let len = arguments.length;
		if (len <= 1) {
			console.error('arguments length mismatch.');
		} else if (len == 2) {
			this.fetchPost(url, null, null, headers, 'json');
		} else if (len == 3) {
			this.fetchPost(url, null, headers, body, 'json');
		} else {
			this.fetchPost(url, headers, body, callback, 'json');
		}
	},

	/**
	 * POST请求，返回Text数据。
	 *
	 * 支持方法重载：
	 * postText(url, callback)
	 * postText(url, body, callback)
	 * postText(url, headers, body, callback)
	 *
	 * @param url 请求地址，type：string
	 * @param headers 请求头，type：json
	 * @param body 请求类型，type：string or json
	 * @param callback 回调方法， type: function
	 */
	postText(url, headers, body, callback){
		let len = arguments.length;
		if (len <= 1) {
			console.error('arguments length mismatch.');
		} else if (len == 2) {
			this.fetchPost(url, null, null, headers, 'text');
		} else if (len == 3) {
			this.fetchPost(url, null, headers, body, 'text');
		} else {
			this.fetchPost(url, headers, body, callback, 'text');
		}
	},

	fetchPost(url, headers, body, callback, type){

		if (body) {
			if (typeof body == 'object' && body.constructor == Object) {
				body = JSON.stringify(body);
			}
		}

		fetch(url, {
			method: 'POST',
			headers,
			body,
		})
			.then((response) => {
				if (type == 'text') {
					return response.text();
				}
				return response.json();
			})
			.then((responseData) => callback(responseData))
			.catch((error) => {
				console.error(error);
				alert('post error');
			})
			.done();

	},
};
export default request;