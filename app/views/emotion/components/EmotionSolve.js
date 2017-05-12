import React, {PureComponent} from "react";
import {Modal, View, Image, TouchableHighlight} from "react-native";
import {Text} from "native-base";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import ImageSolve from "./ImageSolve";
import VideoSolve from "./VideoSolve";
import TextSolve from "./TextSolve";

/**
 * 情绪干预， 弹出
 */

export default class EmotionSolve extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			show: false,
			solve: null,
			data: props.data,
			img: props.emotionImg,
		};
	}

	render() {
		let {data, img}=this.state;
		if (!data)
			return null
		return (
			<View style={styles.container}>
				<View style={styles.View}>
					<View style={styles.emotionBox}>
						<Image source={img} style={{width:60,height:60}}></Image>
						<Text style={{color:'#fff'}}>{data.emotion}</Text>
					</View>
					<View style={{width:theme.deviceWidth*0.9-95,paddingRight:10,paddingTop:30}}>
						<Text style={{color:'#E3B335',marginBottom:10}}>{data.threeCharacterClassic}</Text>
						<Text style={{color:'#fff',fontSize:theme.DefaultFontSize-2}}>        {data.influence}</Text>
					</View>
				</View>
				<View style={styles.imgViewBox}>
					<ScrollableTabView tabBarPosition='top'
									   renderTabBar={() => <DefaultTabBar activeTextColor={theme.navTabBarActiveTextColor}
															   underlineStyle={{backgroundColor: theme.navTabBarActiveTextColor}}/>}>
						{data.methods.map((item, index) => this.renderSolve(item, index))}
					</ScrollableTabView>
				</View>
			</View>
		)
	}

	renderSolve(item, index) {
		if (item.type == 1) {
			return (
				<ImageSolve key={index} tabLabel={"第"+item.fenji} title={item.title} content={item.content}
							img={item.img}></ImageSolve>
			)
		} else if (item.type == 2) {
			return (
				<TextSolve key={index} tabLabel={"第"+item.fenji} title={item.title} content={item.content}></TextSolve>
			)
		} else if (item.type == 3) {
			return (
				<VideoSolve key={index} tabLabel={"第"+item.fenji} title={item.title} content={item.content}
							video={item.img}></VideoSolve>
			)
		}
	}


	show() {
		this.setState({
			show: true,
		})
	}

	hide() {
		this.setState({
			show: false,
			data: null
		})
	}
}

const styles = {
	container: {
		backgroundColor: 'rgba(255,255,255,0.3)',
	},
	View: {
		width: theme.deviceWidth * 0.9,
		height: 160,
		flexDirection: 'row',
	},
	imgViewBox: {
		width: theme.deviceWidth * 0.9,
		height: theme.deviceHeight - 220,
		backgroundColor: '#fff',
	},
	emotionBox: {
		width: 90,
		justifyContent: 'center',
		alignItems: 'center'
	},
	tabView: {
		flex: 1,
		flexGrow: 1,
	},
	title: {
		textAlign: 'center',
		fontSize: theme.DefaultFontSize + 6,
		marginBottom: 60,
	},
	content: {
		textAlign: 'center',
		fontSize: theme.DefaultFontSize + 2,
		marginLeft: 30,
		marginRight: 30,
		lineHeight: 28,
	},
	image: {
		marginTop: 20,
		width: 250,
		height: 200,
		justifyContent: 'center',
	},
	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
};


