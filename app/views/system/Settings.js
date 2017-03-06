import React, {PureComponent} from "react";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body, Text, Row, Thumbnail, Col} from "native-base";
import Header from "../../components/header/BaseHeader";
import {config, urls} from "../../utils/";

/**
 * 系统设置
 */
class Settings extends PureComponent {
	render() {
		return (
			<Container>
				<Header {...this.props}/>
				<Content padder>
					<Row style={styles.title}>
						<Col/>
						<Col style={{width:230}}>
							<Row>
								<Col style={{width:80}}>
									<Thumbnail square size={80} source={require('../../assets/logo.png')}/>
								</Col>
								<Col style={{paddingTop:8}}>
									<Text style={styles.titleText}>{config.appName}</Text>
									<Text>{config.appVersion}</Text>
								</Col>
							</Row>
						</Col>
						<Col/>
					</Row>
				</Content>
			</Container>
		);
	}

	declare() {
		Actions.webview({
			title: '隐式声明',
			uri: urls.pages.DECLARE,
		})
	}

	protocol() {
		Actions.webview({
			title: '用户协议',
			uri: urls.pages.PROTOCOL,
		})
	}

}

const styles = {
	title: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleText: {
		fontSize: 28
	},
	desc: {
		lineHeight: 24
	},
	bold: {
		fontWeight: 'bold',
		marginTop: 10,
		marginBottom: 10
	},
	center: {
		flexDirection: "row",
		justifyContent: 'center',
	}
};

export default (Settings);