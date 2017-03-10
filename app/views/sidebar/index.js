import React, {Component} from 'react';
import {Image, Platform} from 'react-native';
import {connect} from 'react-redux';
import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables
} from 'native-base';
import {Actions} from 'react-native-router-flux';

import material from '../../../native-base-theme/variables/material';
import {changePlatform, changeMaterial, closeDrawer} from '../../actions/drawer';
import styles from './style';
import {urls} from "../../utils/";

const drawerCover = require('../../assets/my-photos/photo.jpg');



const datas = [
	{
		name: '我的时间',
		route: 'MY_TIME',
		icon: require('../../../img/biao.jpg'),
		bg: '#C5F442',
	},
	{
		name: '健康测评',
		route: 'HEALTH_APPRAISAL',
		icon: require('../../../img/jiankang.jpg'),
		bg: '#477EEA',
		types: '8',
	},
	{
		name: '健康圈',
		route: 'HEALTH_CIRCLE',
		icon: require('../../../img/taiyang.jpg'),
		bg: '#DA4437',
		types: '4',
	},
	{
		name: '生命周期',
		route: 'LIFE_CYCLE',
		icon: require('../../../img/woniu.jpg'),
		bg: '#4DCAE0',
	},
	{
		name: '我的位置',
		route: 'MY_LOCATION',
		icon: require('../../../img/dingwei.jpg'),
		bg: '#1EBC7C',
		types: '9',
	}

];
class SideBar extends Component {

	static propTypes = {
		themeState: React.PropTypes.string,
		changePlatform: React.PropTypes.func,
		changeMaterial: React.PropTypes.func,
	}

	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container>
				<Content
					bounces={false}
					style={{flex: 1, backgroundColor: '#f8f8f8', top: -1}}
				>
					<View style={styles.drawerCover}>
						<View style={{width:100,height:100,borderRadius:50,borderWidth:1,borderColor:"#cecece",flexDirection:'row',justifyContent:'center',alignItems: 'center'}}>
							<Image source={drawerCover} style={{width:90,height:90,borderRadius:45,borderWidth:1,borderColor:"#cecece"}}>

							</Image>
						</View>
					</View>
					{(Platform.OS === 'ios') &&
					<View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
						<StyleProvider style={getTheme(variables)}>
							<Button block rounded light onPress={this.props.changePlatform}>
								<Text>Platform</Text>
							</Button>
						</StyleProvider>
						<StyleProvider style={getTheme(material)}>
							<Button block rounded onPress={this.props.changeMaterial}>
								<Text>Material</Text>
							</Button>
						</StyleProvider>
					</View>
					}
					<List
						dataArray={datas} renderRow={data =>
						<ListItem button noBorder
								  style={{flexDirection:'row',justifyContent:'center',alignItems: 'center'}}
								  onPress={() => {
							Actions.webview({
								title:data.name,
								uri:urls.pages[data.route]
							})
							this.props.closeDrawer()
						}}>
							<Left style={{flexDirection:'column',justifyContent:'space-around',alignItems: 'center'}}>
								<Image source={data.icon} style={{width:30,height:28}}/>
								<Text style={styles.text}>{data.name}</Text>
							</Left>
							
						</ListItem>}
					/>

				</Content>
			</Container>
		);
	}
}

function bindAction(dispatch) {
	return {
		closeDrawer: () => dispatch(closeDrawer()),
		changePlatform: () => dispatch(changePlatform()),
		changeMaterial: () => dispatch(changeMaterial()),
	};
}

const mapStateToProps = state => ({
	navigation: state.cardNavigation,
	themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(SideBar);
