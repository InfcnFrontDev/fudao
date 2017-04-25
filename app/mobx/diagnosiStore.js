/**
 * Created by chenxx on 2017/4/21.
 */
import {AsyncStorage} from "react-native";
import {observable, runInAction, computed, action, reaction, autorun} from "mobx";
var dataList = {
    "ok": true,
    "obj": [
        {
            "title": "北京",
            "list": [
                {
                    "id": "17",
                    "name": "脱发",
                },
                {
                    "id": "13",
                    "name": "口腔干燥",
                },

                {
                    "id": "13",
                    "name": "头痛",
                },
                {
                    "id": "12",
                    "name": "肥胖",
                },
                {
                    "id": "17",
                    "name": "呕吐",
                },

            ]
        },
        {
            "title": "40岁用户",
            "list": [
                {
                    "id": "17",
                    "name": "心绞痛",
                },
                {
                    "id": "17",
                    "name": "噎食",
                }, {
                    "id": "17",
                    "name": "高血压",
                },
                {
                    "id": "17",
                    "name": "慢性支气管炎",
                },

            ]
        },
        {
            "title": "春季",
            "list": [
                {
                    "id": "17",
                    "name": "骨质疏松",
                },
                {
                    "id": "17",
                    "name": "咳嗽",
                },

            ]
        },
        {
            "title": "女性",
            "list": [
                {
                    "id": "17",
                    "name": "晕厥",
                }
            ]
        }
    ]
}

class DiagnosisStore {
    @observable diagnosisList = [];
    @observable diagnosisDisease = [];
    @observable errorMsg = '';

    @action
    fetchDiagnosisColumnList() {
        setTimeout(()=>{
            this.diagnosisList = dataList.obj;
        },600)
        // request.getJson(urls.apis.DIAGNOSIS_GETCOMMONDISEASELIST)
        //     .then((result) => {
        //         alert(result);
        //         result = dataList;
        //         if (result.ok) {
        //             this.diagnosisList = result.obj
        //         } else {
        //             tools.showToast('请求出错！')
        //         }
        //     });
    }

    @action
    addDisease(disease) {
        this.diagnosisDisease.push(disease)
        // alert('aaaaaaaaaaaaa'+JSON.stringify(this.diagnosisDisease))
    }

    @computed
    get isFetching() {
        return this.diagnosisList.length == 0 && this.errorMsg == ''
    }
}
const diagnosisStore = new DiagnosisStore();
export default diagnosisStore