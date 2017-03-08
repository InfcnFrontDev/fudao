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

const drawerCover = require('../../../img/drawer-cover.png');

const drawerImage = require('../../../img/logo-kitchen-sink.png');

const datas = [
	{
		name: '我的时间',
		route: 'MY_TIME',
		icon: 'phone-portrait',
		bg: '#C5F442',
	},
	{
		name: '健康测评',
		route: 'HEALTH_APPRAISAL',
		icon: 'phone-portrait',
		bg: '#477EEA',
		types: '8',
	},
	{
		name: '健康圈',
		route: 'HEALTH_CIRCLE',
		icon: 'phone-portrait',
		bg: '#DA4437',
		types: '4',
	},
	{
		name: '生命周期',
		route: 'LIFE_CYCLE',
		icon: 'notifications',
		bg: '#4DCAE0',
	},
	{
		name: 'ABC',
		route: 'ABC',
		icon: 'radio-button-off',
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
					style={{flex: 1, backgroundColor: '#fff', top: -1,borderColor :'#fff'}}
				>
					<View style={styles.drawerCover}>
						<Image source={drawerCover} style={{width:100,height:100}}>

						</Image>
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
						<ListItem button noBorder onPress={() => {
							Actions.webview({
								title:data.name,
								uri:urls.pages[data.route]
							})
							this.props.closeDrawer()
						}}>
							<Left>
								<Icon active name={data.icon} style={{color: '#777', fontSize: 26, width: 30}}/>
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
