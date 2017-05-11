/**
 * Created by chenxx on 2017/4/21.
 */
import {AsyncStorage} from "react-native";
import {observable, runInAction, computed, action, reaction, autorun} from "mobx";
import groupBy from 'lodash/groupBy'

class DiagnosisStore {
    @observable diagnosisList = [];
    @observable diagnosisDisease = [];
    @observable diagnosisDiseaseOrderBy = {};
    @observable errorMsg = '';

    @action
    fetchDiagnosisColumnList() {
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
        this.diagnosisDisease.push(disease);
        this.diagnosisDiseaseOrderBy = groupBy(this.diagnosisDisease, item => {
            return item.name
        });
    }

    @action
    delDisease(index) {
        this.diagnosisDisease.splice(index,1);
        this.diagnosisDiseaseOrderBy = groupBy(this.diagnosisDisease, item => {
            return item.name
        });
    }

    @action
    addMyDiseaseToBackstage(){
        var ids='';
        for(var i=0;i<this.diagnosisDisease.length;i++){
            ids+=this.diagnosisDisease[i].id||this.diagnosisDisease[i].name+',';
        }
        request.getJson(urls.apis.DIAGNOSIS_ADDMYDISEASES,{
            ids
        });
        this.diagnosisDisease = [];
    }

    @computed
    get isFetching() {
        return this.diagnosisList.length == 0 && this.errorMsg == ''
    }
}
const diagnosisStore = new DiagnosisStore();
export default diagnosisStore