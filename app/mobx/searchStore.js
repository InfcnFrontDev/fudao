import {AsyncStorage} from "react-native";
import {observable, runInAction, computed, action, reaction, autorun} from "mobx";

class SearchStore {
	@observable keyword = ''
	@observable searchAll = []
	@observable symptomProblem = []
	@observable information = []
	@observable dailyMethod = []
	@observable errorMsg = ''

	@action
	fetchAll() {
        request.getJson(urls.apis.SEARCH_ALL, {keyword:this.keyword})
            .then((result) => {
                if (result.ok) {
                    let data = result.obj
                    if(JSON.stringify(data) == '{}') {
                        tools.showToast('暂无相关内容！')
                        return
                    }
                    if(data.symptomProblem){
						this.symptomProblem = data.symptomProblem
                    }
                    if(data.dailyMethod){
                        this.dailyMethod = data.dailyMethod
                    }
                    if(data.information){
                        this.information = data.information
                    }
                    if(data.friendsCircle){
                        this.friendsCircle = data.friendsCircle
                    }
                } else {
                    tools.showToast('请求出错！')
                }
            }).catch((error)=>{
            console.log("Api call error")})
	}
    fetchSymptomProblem() {
        request.getJson(urls.apis.SEARCH_SYMPTOMPROBLEM, {keyword:this.keyword,page: 1,pageSize: 3})
            .then((result) => {
                if (result.ok && result.obj) {
                    this.symptomProblem = result.obj
                } else {
                    tools.showToast('请求出错！')
                }
            }).catch((error)=>{
            console.log("Api call error")})
    }
    fetchInformation() {
        request.getJson(urls.apis.SEARCH_INFORMATION, {keyword:this.keyword,page: 1,pageSize: 3})
            .then((result) => {
                if (result.ok && result.obj) {
                    this.information = result.obj
                } else {
                    tools.showToast('请求出错！')
                }
            }).catch((error)=>{
            console.log("Api call error")})
    }
    fetchDailyMethod() {
        request.getJson(urls.apis.SEARCH_DAILYMETHOD, {keyword:this.keyword,page: 1,pageSize: 3})
            .then((result) => {
                if (result.ok && result.obj) {
                    this.dailyMethod = result.obj
                } else {
                    tools.showToast('请求出错！')
                }
            }).catch((error)=>{
            console.log("Api call error")})
    }

    @computed
	get isShowCategory() { return }
	get liaoShenDataSource() {return }
}

const searchStore = new SearchStore()
export default searchStore