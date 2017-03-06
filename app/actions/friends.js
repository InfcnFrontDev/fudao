import * as types from "../actions/types";
import {request, urls} from "../utils/index";


//
export function fetchMyFriendsList(appid) {
	return (dispatch) => {
		dispatch({
			type: types.MY_FRIENDS_FETCH_LIST,
		});


		// 请求数据
		request.getJson(urls.apis.MY_FRIENDS_LIST, {
			appid
		}, (result) => {

			let friendList = [
				{
					name: '杨可可',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111014645789.jpg',
					subtitle: 'Vice President'
				},
				{
					name: '郭小敏',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111105304979.jpg',
					subtitle: 'Vice Chairman'
				},
				{
					name: '王朋',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111005600464.jpg',
					subtitle: 'Vice President'
				},
				{
					name: 'Jackson',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111004639319.jpg',
					subtitle: 'Vice Chairman'
				},
				{
					name: '小仔仔',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111135112148.jpg',
					subtitle: 'Vice President'
				},
				{
					name: '陈欣欣',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111135630111.jpg',
					subtitle: 'Vice Chairman'
				},
				{
					name: '宋淼',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111014928675.jpg',
					subtitle: 'Vice President'
				},
				{
					name: '谢鹏',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111104151660.jpg',
					subtitle: 'Vice Chairman'
				},
				{
					name: '张歆艺',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111120502106.jpg',
					subtitle: 'Vice President'
				},
				{
					name: '李小龙',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111113648881.jpg',
					subtitle: 'Vice Chairman'
				},
				{
					name: '巴洛克',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111113520334.jpg',
					subtitle: 'Vice President'
				},
				{
					name: 'Chris',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111021051669.jpg',
					subtitle: 'Vice Chairman'
				},
				{
					name: '斯洛克',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111022537912.jpg',
					subtitle: 'Vice President'
				},
				{
					name: '邸晓芳',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111121455551.jpg',
					subtitle: 'Vice Chairman'
				},
				{
					name: 'Amy',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111005509257.jpg',
					subtitle: 'Vice President'
				},
				{
					name: '周大福',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111113610143.jpg',
					subtitle: 'Vice Chairman'
				},
				{
					name: '刘德华',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111011500402.jpg',
					subtitle: 'Vice President'
				},
				{
					name: '张学友',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111113438525.jpg',
					subtitle: 'Vice Chairman'
				},
				{
					name: '石原',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111103026169.jpg',
					subtitle: 'Vice Chairman'
				},
				{
					name: '王菲',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111012027778.jpg',
					subtitle: 'Vice Chairman'
				},
				{
					name: '李明军',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111024222714.jpg',
					subtitle: 'Vice Chairman'
				},
				{
					name: '韩晓',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111011417831.jpg',
					subtitle: 'Vice Chairman'
				},
				{
					name: '屈梦宣',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111010828157.jpg',
					subtitle: 'Vice Chairman'
				},
				{
					name: '李庆海',
					avatar_url: 'http://touxiang.qqzhi.com/uploads/2012-11/1111032758936.jpg',
					subtitle: 'Vice Chairman'
				},
			];

			dispatch({
				type: types.MY_FRIENDS_RECEIVE_LIST,
				payload: {
					friendList
				}
			});
		});
	}
}