import React, {Component} from "react";
import {Navigator, StyleSheet, View, Image, Text, TouchableHighlight} from "react-native";
import NavBarView from "../components/NavBarView";
import SectionHeader from "../components/SectionHeader";
import ItemCell from "../components/ItemCell";
import Button from "apsl-react-native-button";
import global from "../utils/global";
import util from "../utils/util";
import FeedbackView from "./FeedbackView";
import AboutView from "./AboutView";
import IconsView from "./IconsView";

export default class SettingsView extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<NavBarView {...this.props}>
				<View>

					<SectionHeader showTopBorder={true} showBottomBorder={true}/>

					<TouchableHighlight underlayColor='transparent'>
						<View style={styles.tweetContainer}>
							<Image source={{uri: util.getAvatarUrl(7)}} style={styles.avatar}/>
							<View style={styles.rightContainer}>
								<View style={styles.userContainer}>
									<Text style={styles.name}>Name: HiApp</Text>
								</View>
								<Text style={[styles.time, styles.ponit]}>Points: 100</Text>
							</View>
						</View>
					</TouchableHighlight>

					<SectionHeader showTopBorder={true} showBottomBorder={true}/>

					{this.renderItemCell({
						text: 'Feedback',
						showBottomBorder: true,
						image: require('../assets/feedback.png'),
						imageContainerStyle: {backgroundColor: '#38b57f'},
						component: FeedbackView
					})}

					{this.renderItemCell({
						text: 'Language',
						showBottomBorder: true,
						image: require('../assets/language.png'),
						imageContainerStyle: {backgroundColor: '#9b59b6'},
						component: IconsView
					})}

					{this.renderItemCell({
						text: '图标库',
						showBottomBorder: false,
						image: require('../assets/about.png'),
						imageContainerStyle: {backgroundColor: '#ff9630'},
						component: IconsView
					})}


					<SectionHeader showTopBorder={true} showBottomBorder={true}/>

					{this.renderItemCell({
						text: '关于App',
						showBottomBorder: false,
						image: require('../assets/about.png'),
						imageContainerStyle: {backgroundColor: '#5999f3'},
						component: AboutView
					})}

					<SectionHeader showTopBorder={true}/>

					<Button style={styles.logoutButton} textStyle={styles.logoutButtonFontsize}>
						Sign Out
					</Button>
				</View>
			</NavBarView>
		)
	}

	renderItemCell(item) {
		return (
			<ItemCell
				onPress={this.gotoView.bind(this, item)}
				text={item.text}
				showDisclosureIndicator={true}
				showBottomBorder={item.showBottomBorder}
				image={item.image}
				imageContainerStyle={item.imageContainerStyle}
			/>
		)
	}

	gotoView(item) {
		global.navigator.push({
			title: item.text,
			component: item.component
		})
	}
}

const styles = StyleSheet.create({
	tweetContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		paddingTop: 4,
		paddingBottom: 10
	},
	avatar: {
		backgroundColor: 'gray',
		width: 50,
		height: 50,
		marginLeft: 10,
		borderRadius: 4
	},
	userContainer: {
		flexDirection: 'row'
	},
	time: {
		marginLeft: 4,
		fontSize: 13,
		color: '#8999a5',
		marginTop: 2
	},
	name: {
		fontWeight: '600',
		fontSize: 15
	},
	rightContainer: {
		flexGrow: 1,
		padding: 10
	},
	ponit: {
		marginLeft: 0
	},
	logoutButton: {
		backgroundColor: '#ff3b30',
		borderWidth: 0,
		marginLeft: 10,
		marginRight: 10,
	},
	logoutButtonFontsize: {
		fontSize: 18,
		color: 'white'
	}
})