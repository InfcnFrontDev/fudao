import {AsyncStorage} from "react-native";
import {observable, runInAction, computed, action, reaction, autorun} from "mobx";
import {ListView} from "react-native";

class AllDiseaseListStore {
	@observable allDiseaseList = []
	@observable data = []
    @observable selectedItem = {}
    @observable modalShow = false
    @observable allDiseaseListLiaoShen = []
	@observable allDiseaseListLiaoXin = []
	@observable errorMsg = ''

	@action
	fetchAllDiseaseList() {
		request.getJson(urls.apis.DISEASE_GETALLDISEASELIST)
			.then((result) => {
				if (result.ok && result.obj) {
					this.allDiseaseList = result.obj
					this.allDiseaseListLiaoShen = result.obj.liaoshen
                    this.allDiseaseListLiaoXin = result.obj.liaoxin
				} else {
					tools.showToast('请求出错！')
				}
			}).catch((error)=>{
            console.log("Api call error");
        });
	}
	fetchData(){
        request.getJson(urls.apis.DISEASE_ACUPOINTS,{diseaseType:this.selectedItem.type,disease: this.selectedItem.name})
            .then((result) => {
                if (result.ok) {
                    this.data = result.obj
                } else {
                    tools.showToast('请求出错！')
                }
            }).catch((error)=>{
            console.log("Api call error");
        })
	}
    ds1 = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    ds2 = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (section1, section2) => section1 !== section2,

    });
    @computed
	get liaoXinDataSource() { return this.ds1.cloneWithRows(this.allDiseaseListLiaoXin.slice())}
	get liaoShenDataSource() {return this.ds2.cloneWithRowsAndSections(this.allDiseaseListLiaoShen)}
}

const allDiseaseListStore = new AllDiseaseListStore()
export default allDiseaseListStore