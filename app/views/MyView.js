import React, {Component} from "react";
import {StyleSheet, View, TouchableNativeFeedback} from "react-native";
import {
	Content,
	Left,
	Body,
	Right,
	Thumbnail,
	Text,
	Separator,
	List,
	ListItem,
	Switch,
	Icon,
	Grid,
	Col,
	Button
} from "native-base";
import NavBarView from "../components/NavBarView";

/**
 * 我的
 */
class MyView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NavBarView {...this.props}>
				<Content>
					<View style={styles.myView}>
						<View style={styles.thumbnailView}>
							<Thumbnail square size={80} source={require('../assets/logo.png')}/>
						</View>
					</View>

					{this.renderGridMenu()}

					<Separator>
						<Text>FORWARD</Text>
					</Separator>

					<View style={{backgroundColor: '#fff'}}>
						<ListItem icon>
							<Left>
								<Icon name="plane"/>
							</Left>
							<Body>
							<Text>Airplane Mode</Text>
							</Body>
							<Right>
								<Switch valur={false}/>
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="wifi"/>
							</Left>
							<Body>
							<Text>Wi-Fi</Text>
							</Body>
							<Right>
								<Text>GeekyAnts</Text>
								<Icon name="arrow-forward"/>
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="bluetooth"/>
							</Left>
							<Body style={{borderWidth: 0}}>
							<Text>Bluetooth</Text>
							</Body>
							<Right style={{borderWidth: 0}}>
								<Text>On</Text>
								<Icon name="arrow-forward"/>
							</Right>
						</ListItem>
					</View>

					<Separator>
						<Text>FORWARD</Text>
					</Separator>

					<View style={{backgroundColor: '#fff'}}>
						<ListItem icon>
							<Left>
								<Icon name="plane"/>
							</Left>
							<Body>
							<Text>Airplane Mode</Text>
							</Body>
							<Right>
								<Switch valur={false}/>
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="wifi"/>
							</Left>
							<Body>
							<Text>Wi-Fi</Text>
							</Body>
							<Right>
								<Text>GeekyAnts</Text>
								<Icon name="arrow-forward"/>
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="bluetooth"/>
							</Left>
							<Body style={{borderWidth: 0}}>
							<Text>Bluetooth</Text>
							</Body>
							<Right style={{borderWidth: 0}}>
								<Text>On</Text>
								<Icon name="arrow-forward"/>
							</Right>
						</ListItem>
					</View>
					<Separator>
						<Text>FORWARD</Text>
					</Separator>

					<View style={{backgroundColor: '#fff'}}>
						<ListItem icon>
							<Left>
								<Icon name="plane"/>
							</Left>
							<Body>
							<Text>Airplane Mode</Text>
							</Body>
							<Right>
								<Switch valur={false}/>
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="wifi"/>
							</Left>
							<Body>
							<Text>Wi-Fi</Text>
							</Body>
							<Right>
								<Text>GeekyAnts</Text>
								<Icon name="arrow-forward"/>
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="bluetooth"/>
							</Left>
							<Body style={{borderWidth: 0}}>
							<Text>Bluetooth</Text>
							</Body>
							<Right style={{borderWidth: 0}}>
								<Text>On</Text>
								<Icon name="arrow-forward"/>
							</Right>
						</ListItem>
					</View>
				</Content>
			</NavBarView>
		)
	}

	renderGridMenu() {
		return (
			<Grid style={{backgroundColor: '#fff'}}>
				{this.renderGridMenuItem({
					icon: 'logo-apple',
					iconColor: '#DAA520',
					text: '收藏'
				})}
				{this.renderGridMenuItem({
					icon: 'pie',
					iconColor: '#79CDCD',
					text: '好友'
				})}
				{this.renderGridMenuItem({
					icon: 'settings',
					iconColor: '#A2B5CD',
					text: '设置'
				})}
			</Grid>
		)
	}

	renderGridMenuItem(item) {
		let colStyle = {justifyContent: 'center', alignItems: 'center'},
			itemStyle = {width: 80, height: 80, justifyContent: 'center', alignItems: 'center'},
			iconStyle = {fontSize: 40, color: item.iconColor};
		return (
			<Col style={colStyle}>
				<TouchableNativeFeedback onPress={()=>this._onPressButton(item)}>
					<View style={itemStyle}>
						<Icon name={item.icon} style={iconStyle}/>
						<Text>{item.text}</Text>
					</View>
				</TouchableNativeFeedback>
			</Col>
		)
	}

	_onPressButton(item) {
		alert(item.text);
	}
}

const styles = StyleSheet.create({
	myView: {
		backgroundColor: '#2BA245',
		alignItems: 'center',
	},
	thumbnailView: {
		marginTop: 10,
		marginBottom: 10,
	}
});

export default (MyView);