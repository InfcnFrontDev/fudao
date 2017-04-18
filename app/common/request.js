import utils from "./utils";
import UserStore from "../mobx/userStore";

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
	getJson(url, params){
		return this.fetchGet(url, params, 'json');
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
	 */
	getText(url, params){
		return this.fetchGet(url, params, 'text');
	},

	fetchGet(url, params, type){
		if (params) {
			let paramsArray = []
			Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
			console.log(paramsArray)
			if (url.search(/\?/) === -1) {
				url += '?' + paramsArray.join('&')
			} else {
				url += '&' + paramsArray.join('&')
			}
		}

		// console.log('GET:' + url);

		return new Promise(function (resolve, reject) {
			fetch(url, {
				method: 'GET',
				headers: {
					'Cache-Control': 'no-cache',
					'authorization': 'd04e62ff-7ac8-4a22-a877-44ff6f4078d2'//UserStore.token
				}
			})
				.then((response) => type == 'text' ? response.text() : response.json())
				.then((result) => {
					if (resolve)
						resolve(result)
				})
				.catch((error) => {
					console.log(error);
					utils.showToast('服务器异常，请重试!');
					if (reject) {
						reject(error);
					}
				}).done();
		})
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
	postJson(url, params){
		return this.fetchPost(url, params, 'json');
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
	postText(url, params){
		return this.fetchPost(url, params, 'text');
	},

	fetchPost(url, params, type){
		let headers = {
				'authorization': '1106775f-0d7d-11e7-9b59-000c293e6828',
			},
			body = null;

		if (params) {
			if (typeof params == 'object' && params.constructor == Object) {
				let paramsArray = []
				Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
				body = paramsArray.join('&');
				headers = {
					"Content-Type": "application/x-www-form-urlencoded"
				};
			} else if (typeof params == 'object' && params instanceof FormData) {
				body = params;
				headers = {
					'Content-Type': 'multipart/form-data',
				};
			}
			else {
				body = params;
			}
		}

		// console.log('GET:' + url);
		// console.log('Body:' + body);

		return new Promise(function (resolve, reject) {
			fetch(url, {
				method: 'POST',
				headers,
				body
			})
				.then((response) => type == 'text' ? response.text() : response.json())
				.then((result) => {
					if (resolve)
						resolve(result)
				})
				.catch((error) => {
					console.log(error);
					utils.showToast('服务器异常，请重试!');
					if (reject) {
						reject(error);
					}
				}).done();
		})
	},
};
export default request;