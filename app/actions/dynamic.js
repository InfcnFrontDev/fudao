import * as types from "../actions/types";
import ImagePicker from 'react-native-image-picker';
import {request, urls,toast} from "../utils/";
import {Actions} from "react-native-router-flux";

/**
 * 动态列表：newDynamic
 */
//跳转至详情页
export function skipToDetail(dynamicDetail,newnew){
	return (dispatch) => {
		Actions.dynamicDetail({newnew:newnew});
		dispatch({
			type: types.DYNAMIC_LIST_LOAD,
			source:{
				dynamicDetail:dynamicDetail
			}
		});
	}
}

 //评论
export function sendComment(event,params){
	return (dispatch) => {
		if(event.nativeEvent.text){
			let realm_dynamic = params.realm.objects('Dynamic').sorted('publishTime');
			let Comments = realm_dynamic.filtered('id="'+params.commentID+'"')[0].dynamicComments;
			let arrayComments =Array.prototype.slice.call(Comments, 0);
			arrayComments[arrayComments.length]={userId:params.user.appid,nick:params.user.title,content:event.nativeEvent.text,commentTime:Date.parse(new Date())}
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
			dispatch({
				type: types.DYNAMIC_LIST_LOAD,
				source:{
					nowShow:'',
					dynamicList:params.dynamic
				}
			});
			if(params.from=='list'){
				params.callback(params.dynamic);
			}else if(params.from=='detail'){
				dispatch({
					type: types.DYNAMIC_LIST_LOAD,
					source:{
						dynamicDetail:params.dynamic[i]
					}
				});
			}
			request.getJson(urls.apis.DYNAMIC_ADD_COMMENT,{
							dynamicID:params.commentID,
							userId:params.user.appid,
							content:event.nativeEvent.text,
							atUserId:''
		 })
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
		    if(arraySuports[j].userId==params.user.appid){
		      arraySuports.splice(j,1);
		      break;
		    }
		  }

			request.getJson(urls.apis.DYNAMIC_DELETE_PRAISE,{
				dynamicID:info.id,
				userId:params.user.appid,
			})
		}else{
		  arraySuports[arraySuports.length]={createTime:Date.parse(new Date()),nick:params.user.title,dynamicId:info.id,userId:params.user.appid};
			request.getJson(urls.apis.DYNAMIC_ADD_PRAISE,{
							dynamicID:info.id,
							userId:params.user.appid,
		 			})
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
			type: types.DYNAMIC_LIST_LOAD,
			source:{
				nowShow:'',
				dynamicList:params.dynamic,
			}
		});
		if(params.from=='list'){
			params.callback(params.dynamic);
		}else if(params.from=='detail'){
			dispatch({
				type: types.DYNAMIC_LIST_LOAD,
				source:{
					dynamicDetail:data
				}
			});
		}
	}
}


//删除
export function del(id,params){
	return (dispatch) => {
		var dynamic = params.dynamic;
		for(var i=0;i<dynamic.length;i++){
			if(dynamic[i].id==id){
				break;
			}
		}
		dynamic.splice(i,1);
		dispatch({
			type: types.DYNAMIC_LIST_LOAD,
			source:{
				dynamicList:dynamic
			}
		});
		if(params.from=='list'){
			params.callback(dynamic)
		}
		params.realm.write(()=>{
			var delDynamic = params.realm.objects('Dynamic').filtered('id="'+id+'"');
			params.realm.delete(delDynamic)
		});
		request.getJson(urls.apis.DYNAMIC_DELETE_DYNAMIC,{
			key:id
		})
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
			type: types.DYNAMIC_LIST_LOAD,
			source:{
				nowShow:params.nowShow
			}
		});
		params.callback(params.dynamic);
	}
}

//数据库后台同步
export function updateRealm(time,flag,id,realm){
	return (dispatch) =>{
		request.getJson(urls.apis.DYNAMIC_LIST,{
			userId:id,
			page:time,
			rows:5,
		}).then((res) =>{
			if(res.datas.length>0){
				insert(res.datas,realm,id);
				if(flag){
					var update=2;
				}else{
					var update=time+1;
				}
				dispatch({
					type: types.DYNAMIC_LIST_LOAD,
					source:{
						update:update
					}
				});
			}
		})
	}
}

// 获取列表数据
export function fetchData(page,options,callback,params){
	return (dispatch) => {
		if(options.firstLoad) {
			request.getJson(urls.apis.DYNAMIC_LIST,{
							userId:params.user.appid,
							page:1,
							rows:6,
					}).then((res)=>{
						  if(res.datas.length>0) {
								//有网状态下第一次加载
								var arrDynamic = res.datas.slice(0,5);
								insert(arrDynamic,params.realm,params.user.appid);
						    let realm_res = params.realm.objects('Dynamic').sorted('publishTime');
								if(realm_res.length<5){
									var dynamicList = realm_res.slice(realm_res.length*(-1)).reverse();
								}else{
									var dynamicList = realm_res.slice(realm_res.length-5,realm_res.length).reverse();
								}
								if(res.datas.length<=5){
									callback(dynamicList,{
										allLoaded:true
									});
								}else{
									callback(dynamicList);
								}
						  }else{
								//无网状态下第一次加载
						    let res = params.realm.objects('Dynamic').sorted('publishTime');
						    if(res.length>0){
						      if(res.length>6){
						        var firstresObj = res.slice(res.length-5,res.length);
						      }else{
						        var firstresObj = res;
						      }
									firstres =Array.prototype.slice.call(firstresObj, 0);
						      dynamicList=firstres.reverse();
									if(res.datas.length<5){
										callback(dynamicList,{
											allLoaded:true
										});
									}else{
										callback(dynamicList);
									}
						    }else{
									callback([],{
										allLoaded:true,
									});
								}
						  }
							dispatch({
								type: types.DYNAMIC_LIST_LOAD,
								source:{
									dynamicList:dynamicList,
									page:true
								}
							});
					})
		}else if(options.refresh){
			request.getJson(urls.apis.DYNAMIC_LIST,{
							userId:params.user.appid,
							page:1,
							rows:params.dynamic.length,
					}).then((res)=>{
						if(res.datas.length>0) {
							insert(res.datas,params.realm,params.user.appid)
							var dynamicList = res.datas;
							dispatch({
								type: types.DYNAMIC_LIST_LOAD,
								source:{
									dynamicList:dynamicList,
								}
							});
						}else{
							var dynamicList = params.dynamic;
						}
						callback(dynamicList);
						tongbu(params.user.appid,1,params.time,params.realm)
					}
			)
		}else if(options.loadMore){
				if(params.page){
					dispatch({
						type: types.DYNAMIC_LIST_LOAD,
						source:{
							page:false,
						}
					});
					return ;
				}

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
									userId:params.user.appid,
									page:Math.floor(params.dynamic.length/5)+1,
									rows:5,
							}).then((res) =>{
									if(res.datas.length<=params.dynamic.length%5){
										callback(params.dynamic,{
											allLoaded:true
										});
									}else{
										var newDynamic = res.datas;
										if(params.dynamic.length%5!=0){
											newDynamic = res.datas.slice(params.dynamic.length%5,5);
										}
										insert(newDynamic,params.realm,params.user.appid);
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

function tongbu(id,page,time,realm){
	request.getJson(urls.apis.DYNAMIC_LIST,{
		userId:id,
		page:1,
		rows:5*time,
	}).then((result) =>{
		if(result.datas.length>0){
			insert(result.datas,realm,id);
			let realm_res = realm.objects('Dynamic').sorted('publishTime');
			let realm_data = realm_res.filtered('publishTime>="'+result.datas[result.datas.length-1].publishTime+'"');
			if(result.datas.length<realm_data.length){

			}

		}
	})
}

//数据库插入操作，本文件内调用
function insert(datas,realm,id){
	realm.write(()=>{
		for(let i=0;i<datas.length;i++){
			var flag=false
			for(let j=0;j<datas[i].dynamicPraises.length;j++){
				if(datas[i].dynamicPraises[j].userId==id){
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
				uploadImage(response.uri,dispatch);
      }else{
				return ;
			}
    });
	}
}


function uploadImage(uri,dispatch){
		dispatch({
			type: types.DYNAMIC_LIST_LOAD,
			source:{
				rightButton:'上传中'
			}
		});
    let formData = new FormData();
    var file = {uri: uri, type: 'multipart/form-data', name: 'a.jpg'};
    formData.append("filename",file);
		request.postJson(urls.apis.IMAGE_UPLOAD, formData)
			.then(result => {
				if (result.ok) {
					console.log(result.obj);
					toast.show("上传成功");
					dispatch({
						type: types.DYNAMIC_LIST_LOAD,
						source:{
							rightButton:'发表'
						}
					});
					dispatch({
						type: types.NEW_DYNAMIC_ADD_RENDER_PICTURE_ARR,
						source:result.obj
					});
				}
		})
  }

//添加新的动态
export function addNewDynamic(newDynamic,newnew,userId,picArr) {
	return (dispatch) => {
		var type = 1;
		var pic = '';
		if(picArr.length!=0){
			pic = picArr.join(',');
			type=2;
		}
		request.getJson(urls.apis.DYNAMIC_ADD_DYNAMIC,{
						userId:userId,
						content:newDynamic,
						path:pic,
						type:type
	 }).then(()=>{
		 Actions.pop({refresh: { newnew: !newnew}})
	 })
	}
}

export function clear(){
	return (dispatch) =>{
		dispatch({
			type: types.DYNAMIC_LIST_LOAD,
			source:{
				addPicture:[],
				renderPicture:[],
			}
		});
	}
}
