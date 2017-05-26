import {observable} from "mobx";

class QuestionStore {
	@observable questionId = ''
	@observable questionName = ''
	@observable questionType = ''
	@observable modalShow = false
	@observable errorMsg = ''

}

const questionStore = new QuestionStore()
export default questionStore