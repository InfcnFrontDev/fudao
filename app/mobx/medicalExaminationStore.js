import {observable, asMap, action, runInAction} from "mobx";

class MedicalExaminationStore {
	@observable medicalExaminationList = []
	@observable medicalExaminationGroup = {}
	@observable isFetching = true
	@observable errorMsg = ''

	@action
	fetchMedicalExaminationList = async() => {
		try {
			this.isFetching = true

			request.getJson(urls.apis.MEDICALEXAMINATION_GETMEDICALINFORMATIONLIST)
				.then((result) => {
					if (result.ok) {
						this.medicalExaminationList = result.obj
						this.medicalExaminationGroup = _.groupBy(result.obj, (n) => n.type);
					}
					this.isFetching = false
				});

		} catch (error) {
			this.errorMsg = error
			this.isFetching = false
		}
	}
}

const medicalExaminationStore = new MedicalExaminationStore()
export default medicalExaminationStore