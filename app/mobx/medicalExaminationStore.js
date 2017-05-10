import {observable, asMap, action, runInAction} from "mobx";

class MedicalExaminationStore {
	@observable medicalExaminationList = []
	@observable medicalExaminationGroup = {}
	/*@observable isFetching = true*/
	@observable errorMsg = ''

	@action
	fetchMedicalExaminationList = async() => {
		try {
			/*this.isFetching = true*/

			request.getJson(urls.apis.MEDICALEXAMINATION_GETMEDICALINFORMATIONLIST)
				.then((result) => {
					if (result.ok) {
						let arr=result.obj;
						arr.map((item,index)=>{
							if(item.inputType=="1"){
								item.limit="number";
							}else if(item.inputType=="2"){
								item.limit="text";
							}else if(item.inputType=="3"){
								if(item.items[0]=="阴性"){
									item.limit= 'yinx_yangx';
								}else if(item.items[1]=="色弱"){
									item.limit='zc_sr_sm';
								}else if(item.items[1]=="异常"){
									item.limit='zc_yc';
								}else if(item.items[1]=="齐"||item.items[1]=="不齐"){
									item.limit='qi_bqi';
								}
							}else if(item.inputType=="4"){
								item.limit="percent"
							}
						});
						this.medicalExaminationList = arr;
						this.medicalExaminationGroup = _.groupBy(result.obj, (n) => n.type);

					}
					/*this.isFetching = false*/
				});

		} catch (error) {
			this.errorMsg = error
			this.isFetching = false
		}
	}
	@action
	updataMedicalExamination = async(name,value) => {
		try {
			/*this.isFetching = true;*/

			request.getJson(urls.apis.MEDICALEXAMINATION_UPDATAMEDICALINFORMATIONRESULT,{
				medicalInformationId:name,
				value:value
			})
				.then((result) => {
					if (result.ok) {
						tools.showToast("修改成功");
						this.fetchMedicalExaminationList()
					}
					/*this.isFetching = false*/
				});

		} catch (error) {
			this.errorMsg = error;
			this.isFetching = false
		}
	}
}

const medicalExaminationStore = new MedicalExaminationStore();
export default medicalExaminationStore