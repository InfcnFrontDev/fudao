import React, {PureComponent} from "react";
import {View} from "react-native";
import {urls} from "../../../utils/index";
import { WebView} from "../../../components/index";


/**
 * 图片展示组件
 */
class SelfDiagnosis extends PureComponent {

	render() {
		return (
			<View style={styles.container}>
				<WebView uri={urls.pages.SELFDIAGNOSIS}/>
			</View>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		// backgroundColor:'#ff0'
		// flexDirection: 'column',
		// justifyContent: 'center',
		// alignItems: 'center',
		// marginBottom: 30,
		// borderRadius: 10
	},

};

SelfDiagnosis.propsTypes = {

};

export default (SelfDiagnosis);

