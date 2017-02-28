import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {Left, Right, Body, View} from "native-base";
import Separator from "../../../components/separator/";
import ItemPicture from "../../article/item-picture";
import styles from "./styles";

/**
 * result
 */
class Result extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let {list} = this.props;
		let datas = [
			{
				text: '李维嘉发伤心感慨 节目现场崩溃大哭 何炅谢娜话里露玄机',
				note: 'Its time to build a difference . .',
			},
			{
				text: '杭州5名公交司机照片挂车厢征婚 一人已脱单',
				note: 'One needs courage to be happy and smiling all time . . ',
			},
			{
				text: '儿童误将药丸当糖豆带到幼儿园分享 致4人中毒',
				note: 'Live a life style that matchs your vision',
			},
			{
				text: '河南夫妻吵架醉酒丈夫挥刀断指 已被成功接活',
				note: 'Failure is temporary, giving up makes it permanent',
			},
			{
				text: '女子虐打男童被拘：孩子系花钱买来 是否涉拐卖儿童待查',
				note: 'The biggest risk is a missed opportunity !!',
			},
			{
				text: '男子硕士学历月薪上万 占共享单车喷漆还加儿童座',
				note: ''
			}
		];

		return (
			<View>
				<Separator title="资讯"/>
				<View style={styles.itemContainer}>
					{datas.map((data) => (
						<ItemPicture key={data.text} data={data}/>
					))}
				</View>
			</View>
		)
	}

	// 搜索
	search(keyword) {
		const {dispatch} = this.props;
		if (keyword == '') {
			dispatch(clearSearchResult())
		} else {
			dispatch(searchSymptomProblem(keyword))
		}
	}

}

function bindAction(dispatch) {
	return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Result);