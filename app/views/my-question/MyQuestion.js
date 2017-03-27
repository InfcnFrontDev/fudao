import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {View, Image, DeviceEventEmitter, ScrollView} from "react-native";
import {Container, Content, Header} from "../../components/index";
import QuestionMyself from "./components/QuestionMyself";
import QuestionAll from "../../components/QuestionAndExpectAll";
import {initialMyQuestion} from "../../actions/my-question.js";

/**
 * 我的问题
 */
class MyQuestion extends PureComponent {
	constructor(props) {
		super(props);

	}

	componentWillMount() {
		const {dispatch} = this.props;
		dispatch(initialMyQuestion(this.props.userId, this.props.my_question))
	}

	render() {

		return (
			<Container>
				<Header {...this.props}/>
				<Content delay>
					<ScrollView>
						<QuestionMyself />
						<QuestionAll from='myquestion'/>
					</ScrollView>
				</Content>
			</Container>
		)
	}

}

const styles = {};

const mapStateToProps = state => ({
	renqun: state.user.loginUser.renqun,
	userId: state.user.loginUser.appid,
	my_question: state.myQuestion.my_question,
});
export default connect(mapStateToProps)(MyQuestion);
