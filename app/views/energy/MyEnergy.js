import React, {PureComponent} from "react";
import {View, Image, DeviceEventEmitter} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import { ListItem, Text, Left, Button, Icon, Body, Right} from "native-base";
import {Container, Header, Content, WebView} from "../../components/index";
import {theme, urls} from "../../utils/";

/**
 * 我的能量场
 */
class MyEnergy extends PureComponent {

	render() {
		return (
			<Container>
				<Header {...this.props} />
				<Content>
					<WebView uri={urls.pages.MY_ENERGY}/>
				</Content>
				<View style={styles.View}>
					<Button style={styles.Btn} onPress={()=>Actions['energyInformation']()}>
						<Text>资料填写</Text>
					</Button>
					<Button style={styles.Btn} onPress={()=>Actions['energyQuestionnaire']()}>
						<Text>问卷调查</Text>
					</Button>
				</View>
			</Container>
		)
	}
}


const styles = {
	View:{
        flexDirection:'row',
        height:80,
        justifyContent:'space-around'
    },
    Btn:{
    	marginTop:30,
    	width:100,
    	height:30,
    	justifyContent:'center'
    }
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(MyEnergy);
