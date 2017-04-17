import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {View, Image, DeviceEventEmitter, ScrollView} from "react-native";
import {Container, Content, Header} from "../../components/index";
import QuestionMyself from "../question/components/QuestionMyself";
import QuestionAll from "../question/components/QuestionAll";
import {fetchAllExpects, fetchMyExpects, addMyExpect, removeMyExpect} from "../../actions/expect";

/**
 * 我的期望
 */
class MyExpect extends PureComponent {

	render() {
		let {allExpects, myExpects, myExpectMap} = this.props;
		return (
			<Container>
				<Header {...this.props}/>
				<Content delay>
					<ScrollView>
						<QuestionMyself
							title="我的期望"
							items={myExpects}
							onItemPress={(item) => this._onItemPress(item)}
							onItemRemove={(item) => this._onItemRemove(item)}/>
						<QuestionAll
							items={allExpects}
							selectedItem={myExpectMap}
							onItemPress={(item) => this._onItemPress(item)}
							onItemAdd={(item)=>this._onItemAdd(item)}/>
					</ScrollView>
				</Content>
			</Container>
		)
	}
	componentDidMount() {
		const {dispatch} = this.props;
		// 抓取所有问题
		dispatch(fetchAllExpects());
		// 抓取我的问题
		dispatch(fetchMyExpects());
	}

	/**
	 * 按下问题， 打开问题详情
	 * @param expect
	 * @private
	 */
	_onItemPress(expect) {
		Actions.myExpectDetail({expect})
	}

	/**
	 * 从我的问题列表中移除
	 * @param expect
	 * @private
	 */
	_onItemRemove(expect) {
		const {dispatch} = this.props;
		dispatch(removeMyExpect(expect));
	}

	/**
	 * 添加到我的问题列表中
	 * @param expect
	 * @private
	 */
	_onItemAdd(expect) {
		const {dispatch} = this.props;
		dispatch(addMyExpect(expect));
	}

}

const styles = {};

const mapStateToProps = state => ({
	...state.user,
	...state.expect
});
export default connect(mapStateToProps)(MyExpect);
