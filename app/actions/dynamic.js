import * as types from "../actions/types";
import ImagePicker from 'react-native-image-picker';
import {request, urls} from "../utils/";
import { ToastAndroid,} from "react-native";
/**
 * 动态列表：newDynamic
 */
 //评论
export function sendComment(event,params){
	return (dispatch) => {
		if(event.nativeEvent.text){
			let realm_dynamic = params.realm.objects('Dynamic').sorted('publishTime');
			let Comments = realm_dynamic.filtered('id="'+params.commentID+'"')[0].dynamicComments;
			let arrayComments =Array.prototype.slice.call(Comments, 0);
			arrayComments[arrayComments.length]={userId:'867516022307943,86751602230794380640149',nick:'用户',content:event.nativeEvent.text,commentTime:Date.parse(new Date())}
			params.realm.write(()=>{
					params.realm.create('Dynamic',{
						id:params.commentID,
						dynamicComments:arrayComments,
						show:false,
					},true)
			})
			for(var i=0;i<params.dynamic.length;i++){
				if(params.dynamic[i].id==params.commentID){
					params.dynamic[i]=realm_dynamic.filtered('id="'+params.commentID+'"')[0];
					break;
				}
			}
			/*
			暂缺提交给后台
			*/
			dispatch({
				type: types.DYNAMIC_LIST_ZAN_COMMENT,
				source:{
					nowShow:'',
					dynamicList:params.dynamic
				}
			});
			params.callback(params.dynamic);
		}
	}
}
//点赞

export function zan(info,params){
	return (dispatch) => {
		let realm_dynamic = params.realm.objects('Dynamic').sorted('publishTime');
		let data = realm_dynamic.filtered('id="'+info.id+'"')[0];
		let suports = data.dynamicPraises;
		let arraySuports =Array.prototype.slice.call(suports, 0);
		if(info.flag){
		  for(var j=0;j<arraySuports.length;j++){
		    if(arraySuports[j].userId=='867516022307943,86751602230794380640149'){
		      arraySuports.splice(j,1);
		      break;
		    }
		  }
		}else{
		  arraySuports[arraySuports.length]={createTime:Date.parse(new Date()),nick:'用户',dynamicId:info.id,userId:'867516022307943,86751602230794380640149'};
		}
		params.realm.write(()=>{
		    params.realm.create('Dynamic',{
		      id:info.id,
		      dynamicPraises:arraySuports,
		      flag:!info.flag,
		      show:false,
		    },true)
		})
		for(var i=0;i<params.dynamic.length;i++){
		  if(params.dynamic[i].id==info.id){
		    params.dynamic[i]=data;
		    break;
		  }
		}
		dispatch({
			type: types.DYNAMIC_LIST_ZAN_COMMENT,
			source:{
				nowShow:'',
				dynamicList:params.dynamic
			}
		});
		params.callback(params.dynamic);
	}
}


//評論點讚按鈕的顯示和隱藏
export function show(id,params){
	return (dispatch) => {
		var add=2;
		var timer = 0;
		if(params.nowShow==id){
		  params.realm.write(()=>{
		      params.realm.create('Dynamic',{ id:id, show:false, },true)
		  })
		  add = 1;
		}else{
		  params.realm.write(()=>{
		      params.realm.create('Dynamic',{ id:id, show:true,},true)
		      if(params.nowShow!=''){
		        params.realm.create('Dynamic',{ id:params.nowShow, show:false,},true)
		      }
		  })
		}
		let realm_dynamic = params.realm.objects('Dynamic').sorted('publishTime');
		for(var i=0;i<params.dynamic.length;i++){
		  if(params.dynamic[i].id==params.nowShow){
		    params.dynamic[i]=realm_dynamic.filtered('id="'+params.nowShow+'"')[0];
		    if(add==1){
		      break;
		    }
		    timer++;
		  }
		  if(params.dynamic[i].id==id){
		    params.dynamic[i]=realm_dynamic.filtered('id="'+id+'"')[0];
		    timer++;
		  }
		  if(timer==add){
		    break;
		  }
		}
		if(params.nowShow==id){
		  params.nowShow=0;
		}else{
		  params.nowShow = id;
		}
		dispatch({
			type: types.DYNAMIC_LIST_SHOW,
			source:{
				nowShow:params.nowShow
			}
		});
		params.callback(params.dynamic);
	}
}


// 获取列表数据
export function fetchData(page,options,callback,params){
	return (dispatch) => {
		if(options.firstLoad) {
			request.getJson(urls.apis.DYNAMIC_LIST,{
							userId:'867516022307943,86751602230794380640149',
							page:1,
							rows:5,
					}).then((res)=>{
						  if(res.datas.length>0) {
								//有网状态下第一次加载
								insert(res.datas,params.realm);
						    let realm_res = params.realm.objects('Dynamic').sorted('publishTime');
						    var dynamicList = realm_res.slice(realm_res.length-5,realm_res.length).reverse();
								callback(dynamicList);
						  }else{
								//无网状态下第一次加载
						    let res = params.realm.objects('Dynamic').sorted('publishTime');
						    if(res){
						      if(res.length>6){
						        var firstres = res.slice(res.length-5,res.length);
						      }else{
						        var firstres = res;
						      }
						      dynamicList=firstres.reverse();
						      callback(dynamicList);
						    }
						  }
							dispatch({
								type: types.DYNAMIC_LIST_LOAD,
								source:{
									dynamicList:dynamicList,
								}
							});
					})
		}else if(options.refresh){

			request.getJson(urls.apis.DYNAMIC_LIST,{
							userId:'867516022307943,86751602230794380640149',
							page:1,
							rows:5,
					}).then((res)=>{
						  if(res.datas.length>0) {
								//有网状态下第一次加载
								var realmDynamic = params.realm.objects('Dynamic');
								var length_ago = realmDynamic.length;
								insert(res.datas,params.realm);
						    let realm_res = realmDynamic.sorted('publishTime');
								var length_now = realmDynamic.length;
								if(length_ago<length_now){
									var newData = realm_res.slice(length_ago,length_now).reverse();
									var dynamicList = newData.concat(params.dynamic);
									callback(dynamicList);
									dispatch({
										type: types.DYNAMIC_LIST_LOAD,
										source:{
											dynamicList:dynamicList
										}
									});
								}else{
									callback(params.dynamic);
								}
						  }
					}
			)
		}else if(options.loadMore){
		    let realm_res = params.realm.objects('Dynamic').sorted('publishTime');
		    if(realm_res.length>params.dynamic.length){
		      if(realm_res.length>params.dynamic.length+5){
		        var render_realm_res = realm_res.slice(realm_res.length-params.dynamic.length-6,realm_res.length-params.dynamic.length-1).reverse();
		      }else{
		        var render_realm_res = realm_res.slice(0,realm_res.length-params.dynamic.length).reverse();
		      }
		      var dynamicList = params.dynamic.concat(render_realm_res);
		      callback(dynamicList);
					dispatch({
						type: types.DYNAMIC_LIST_LOAD,
						source:{
							dynamicList:dynamicList,
						}
					});
		    }else{
					request.getJson(urls.apis.DYNAMIC_LIST,{
									userId:'867516022307943,86751602230794380640149',
									page:Math.floor(params.dynamic.length/5)+1,
									rows:5,
							}).then((res) =>{
									if(res.datas.length==0){
										callback(params.dynamic,{
											allLoaded:true
										});
									}else{
										var newDynamic = res.datas;
										if(params.dynamic.length%5!=0){
											newDynamic = res.datas.slice(params.dynamic.length%5,5);
										}
										insert(newDynamic,params.realm);
										var dynamicList = params.dynamic.concat(newDynamic);
										callback(dynamicList);
										dispatch({
											type: types.DYNAMIC_LIST_LOAD,
											source:{
												dynamicList:dynamicList,
											}
										});
									}
							})
		  }
		}
	}
}

function insert(datas,realm){
	realm.write(()=>{
		for(let i=0;i<datas.length;i++){
			var flag=false
			for(let j=0;j<datas[i].dynamicPraises.length;j++){
				if(datas[i].dynamicPraises[j].userId==datas[i].userId){
					flag=true
				}
			}
			realm.create('Dynamic',{
				flag:flag,
				...datas[i]
			},true)
		}
	})
}


/**
 * 新动态：newDynamic
 */
// 选择上传图片的方式
export function selectPhotoTapped(keyword) {
	return (dispatch) => {
    const options = {
			title:'选择图片',
			cancelButtonTitle:'取消',
			takePhotoButtonTitle:'拍照',
			chooseFromLibraryButtonTitle:'从手机相册选择',
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
		var source={};
    ImagePicker.showImagePicker(options, (response) => {
      if (response.uri) {
        let source = {uri: response.uri};
				dispatch({
					type: types.NEW_DYNAMIC_ADD_PICTURE_ARR,
					source:source
				});
      }else{
				return ;
			}
    });
	}
}
