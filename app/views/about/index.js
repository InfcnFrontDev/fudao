import React, {PureComponent} from "react";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body, Text, Row, Thumbnail, Col, Button} from "native-base";
import Header from "../../components/header/base";
import {config, urls} from "../../utils/";
import styles from "./styles";

/**
 * 关于福道
 */
class About extends PureComponent {
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
					<Row>
						<Text style={styles.desc}>
							&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;
							福道健康环是以个人为中心的健康习惯培养APP。帮助您及时了解您的健康状态，发现和解决您的健康问题，全程记录和预估您的变化过程，配以完善的线下服务体系，为您打造基于您个人的全方位健康生态。
						</Text>
					</Row>
					<Row>
						<Text style={styles.bold}>关注我们</Text>
					</Row>
					<Row>
						<Text>官方网站：www.infcn.com.cn</Text>
					</Row>
					<Row>
						<Text>微信公众号：infcn430374</Text>
					</Row>
					<Row>
						<Text style={styles.bold}>联系我们</Text>
					</Row>
					<Row>
						<Text>商务合作：fudao@infcn.com.cn</Text>
					</Row>
					<Row style={{marginTop:30}}>
						<Col style={styles.center}>
							<Button onPress={()=> this.declare()}><Text>隐式声明</Text></Button>
						</Col>
						<Col style={styles.center}>
							<Button onPress={()=> this.protocol()}><Text>用户协议</Text></Button>
						</Col>
					</Row>
				</Content>
			</Container>
		);
	}

	declare() {
		Actions.webview({
			title: '隐式声明',
			uri: urls.declare + "?userId=1",
		})
	}

	protocol() {
		Actions.webview({
			title: '用户协议',
			uri: urls.protocol,
		})
	}

}

export default (About);