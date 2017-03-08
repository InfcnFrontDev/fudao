import * as types from "../actions/types";
import {ToastAndroid} from "react-native";
import {request, urls} from "../utils/";
import  {hex_md5} from "../views/authentication/components/md5"
// 登录
export function   login(phoneVale,passwordVale,d){
			return (dispatch) => {
				dispatch({
					type: types.USER_LOGGING,
				});
			request.getJson(urls.apis.LOGIN,{
					account:phoneVale,
					pwd:hex_md5(phoneVale+passwordVale),
				},(data)=>{
					if(data.success){
						dispatch({
							type: types.USER_LOGIN,
							payload: {
								...data
							}
						})
						d()
					}else{
						ToastAndroid.show("密码错误", ToastAndroid.SHORT);
					}
				}
			)
		}

}
// 注销
export function logout() {
	return (dispatch) => {
		dispatch({
			type: types.USER_LOGOUT
		});
	}
}