import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Content, Header} from "../../components/index";
import {View, Image} from "react-native";
import QuestionMyself from "./components/QuestionMyself";
import QuestionTab from "./components/QuestionTab";
import {request, urls} from "../../utils/index";

/**
 * 我的问题详情
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
						title="我的问题"
						items={myQuestions}
						selectedItem={question}
						onItemPress={(item) => this._onItemPress(item)}
						onItemRemove={(item) => this._onItemRemove(item)}/>
					<QuestionTab question={question} url={urls.apis.MY_QUESTION_TREETMENT}/>
				</Content>
			</Container>
		)
	}

	_onItemPress(question) {
		let that =this;
		this.setState({
			question: null
		})
		setTimeout(()=>{
			that.setState({
				question: question
			})
		},300)
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
