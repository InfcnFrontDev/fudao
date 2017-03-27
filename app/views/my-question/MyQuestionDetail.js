import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Title, Left, Button, Icon, Body, Right} from "native-base";
import {Container, Content, Header, Loading} from "../../components/index";
import {View, Image} from "react-native";
import {Actions} from "react-native-router-flux";
import QuestionMyself from "./components/QuestionMyself";
import QuestionTab from "./components/QuestionTab";
import {getQuestionTreetment} from '../../actions/my-question.js'
import {request, urls, toast} from "../../utils/index";

/**
 * 我的问题
 */
class MyQuestionDetail extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			question: props.question
		}
	}

	render() {
		let {myQuestions} = this.props;
		let {question} = this.state;
		return (
			<Container style={styles.container}>
				<Header title={question && question.showVal}/>
				<Content delay>
					<QuestionMyself
						items={myQuestions}
						selectedItem={question}
						onItemPress={(item) => this._onItemPress(item)}
						onItemRemove={(item) => this._onItemRemove(item)}/>
					<QuestionTab question={question}/>
				</Content>
			</Container>
		)
	}

	_onItemPress(question) {
		this.setState({
			question: null
		})
		request.getJson(urls.apis.MY_QUESTION_TREETMENT, {
			diseaseId: question.id,
			renqun: 'aged',
			local: '北京'
		}).then((res)=> {
			this.setState({
				question: Object.assign(res.obj, question)
			})
		})
	}
}

const styles = {
	container: {},
	content: {
		backgroundColor: '#fff',
		flexDirection: 'column',
		flex: 1,
	},
};

const mapStateToProps = state => ({
	...state.user,
	...state.question,
});
export default connect(mapStateToProps)(MyQuestionDetail);
