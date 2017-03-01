import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Content, Left, Right, Body} from "native-base";
import Header from "../../components/header/BaseHeader";
import Separator from "../../components/Separator";
import GiftedListView from "../../components/GiftedListView";
import MyInfoItem from "./item";

const groups = {
	'基本信息': [
		{
			text: '我的头像',
			note: 'photo.jpg',
		},
		{
			text: '姓名',
			note: '可可杨',
		},
		{
			text: '性别',
			note: '男',
		},
		{
			text: '出生日期',
			note: '1987-07-15',
		},
		{
			text: '身高',
			note: '173cm',
		}
	],
	'病史': [
		{
			text: '个人史',
			note: '文化程度低',
		},
		{
			text: '家族史',
			note: '无',
		},
		{
			text: '婚育史',
			note: '无',
		},
		{
			text: '用药史',
			note: '无',
		}
	],
	'生活习惯': [
		{
			text: '饮食',
			note: '饮食过咸',
		},
		{
			text: '运动',
			note: '长时间保持同一姿势',
		},
		{
			text: '睡眠',
			note: '无',
		},
		{
			text: '吸烟',
			note: '吸烟',
		},
		{
			text: '饮酒',
			note: '长期酗酒',
		}
	],
	'长期精神状况': [
		{
			text: '精神状况',
			note: '紧张/疲劳/...',
		}
	]
};

/**
 * 我的基本信息
 */
class MyInfo extends PureComponent {

	render() {
		return (
			<Container>
				<Header {...this.props}/>
				<Content>
					<GiftedListView
						onFetch={this._onFetch.bind(this)}
						rowView={this._renderRowView.bind(this)}
						firstLoader={true}
						refreshable={true}
						enableEmptySections={true}
						withSections={true}
						sectionHeaderView={this._renderSectionHeaderView.bind(this)}
						pagination={false}
					/>
				</Content>
			</Container>
		);
	}

	_onFetch(page = 1, callback, options) {
		setTimeout(() => {
			callback(groups, {allLoaded: true});
		}, 500);
	}

	_renderRowView(rowData) {
		return <MyInfoItem data={rowData} onPress={()=> this._onOpenDialog()}/>
	}

	_renderSectionHeaderView(sectionData, sectionID) {
		return (
			<Separator title={sectionID}/>
		)
	}
}

function bindAction(dispatch) {
	return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(MyInfo);