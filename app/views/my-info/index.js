import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Content, Left, Right, Body} from "native-base";
import Header from "../../components/header/BaseHeader";
import Separator from "../../components/Separator";
import GiftedListView from "../../components/GiftedListView";
import MyInfoItem from "./item";
import {request, urls} from "../../utils/";



/**
 * 我的基本信息
 */
class MyInfo extends PureComponent {

	render() {
		return (
			<Container>
				<Header {...this.props}/>
				<Content style={styles.content}>
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

		let {loginUser} = this.props;
		request.getJson(urls.apis.USER_DETAIL, {
			userId: loginUser.appid,
		}).then((result) => {
			let {userInformation} = result.obj;
			let groups = {
				'基本信息': [
					{
						text: '我的头像',
						note: 'photo.jpg',
					},
					{
						text: '姓名',
						note: userInformation.title,
					},
					{
						text: '性别',
						note: userInformation.sex,
					},
					{
						text: '出生日期',
						note: userInformation.birthdate,
					},
					{
						text: '身高',
						note: userInformation.tops,
					}
				],
				'病史': [
					{
						text: '个人史',
						note: this.substr(userInformation.personal_history),
					},
					{
						text: '家族史',
						note: this.substr(userInformation.family_history),
					},
					{
						text: '婚育史',
						note: this.substr(userInformation.obstetrical_history),
					},
					{
						text: '用药史',
						note: this.substr(userInformation.medication_history),
					}
				],
				'生活习惯': [
					{
						text: '饮食',
						note: this.substr(userInformation.diet),
					},
					{
						text: '运动',
						note: this.substr(userInformation.motion),
					},
					{
						text: '睡眠',
						note: this.substr(userInformation.sleep),
					},
					{
						text: '吸烟',
						note: this.substr(userInformation.smoke),
					},
					{
						text: '饮酒',
						note: this.substr(userInformation.drink),
					}
				],
				'长期精神状况': [
					{
						text: '精神状况',
						note: this.substr(userInformation.mental_state),
					}
				]
			};
			setTimeout(() => {
				callback(groups, {allLoaded: true});

			}, options.firstLoad ? 300 : 0)
		});
		/*setTimeout(() => {
			callback(groups, {allLoaded: true});
		}, 500);*/
	}
	substr(str){
		if(str.length>10)
			str=str.substr(0, 10)+'...';
		
		return str
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

const styles = {
	content: {backgroundColor: '#FFF'},
}

const mapStateToProps = state => ({
	loginUser: state.userStore.loginUser
});
export default connect(mapStateToProps)(MyInfo);
