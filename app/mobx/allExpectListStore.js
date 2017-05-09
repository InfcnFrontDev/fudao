import {observable, runInAction, computed, action, reaction, autorun} from "mobx";

class AllExpectListStore {
	@observable allExpectList = []
	@observable allExpectListLiaoShen = []
	@observable allExpectListLiaoXin = []
	@observable errorMsg = ''

	@action
	fetchAllExpectList() {
		request.getJson(urls.apis.EXPECT_GETALLEXPECTLIST)
			.then((result) => {
				if (result.ok && result.obj) {
                    this.allExpectList = result.obj
					this.allExpectListLiaoShen = result.obj.liaoshen
                    this.allExpectListLiaoXin = result.obj.liaoxin
				} else {
					tools.showToast('请求出错！')
				}
			}).catch((error)=>{
            console.log("Api call error");
        });
	}
}

const allExpectListStore = new AllExpectListStore()
export default allExpectListStore