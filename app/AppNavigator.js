import React, {PureComponent} from "react";
import {StatusBar, Platform} from "react-native";
import {StyleProvider, Drawer} from "native-base";
import {connect} from "react-redux";
import SplashScreen from "react-native-splash-screen";
import AppRouter from "./AppRouter";
import getTheme from "../native-base-theme/components/";
import Position from "./views/position/Position";
import {theme} from "./utils/index";


/**
 * 导航
 */
class AppNavigator extends PureComponent {

	render() {
		let {dispatch} = this.props;
		return (
			<StyleProvider style={getTheme(theme)}>
				<Drawer ref={(ref) => this._drawer = ref}>
					<StatusBar
						hidden={(this.props.drawerState === 'opened' && Platform.OS === 'ios') ? true : false}
						backgroundColor={theme.statusBarColor}/>

					<AppRouter/>
					<Position />
				</Drawer>
			</StyleProvider>
		)
	}

	componentDidMount() {
		SplashScreen.hide();
	}
}

const mapStateToProps = state => ({
	drawerState: state.drawer.drawerState,
});
export default connect(mapStateToProps)(AppNavigator);
