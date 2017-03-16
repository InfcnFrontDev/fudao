import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {ListItem, Text, Button,} from "native-base";
import {View, Image, ToastAndroid, DeviceEventEmitter} from "react-native";
import {good, calm, bad} from './Data';
import {theme, urls, request, toast} from "../../../utils/";
import {updateMyEmotion} from "../../../actions/emotion";

/**
 * 情绪列表
 */
class ItemEmotion extends PureComponent {
	constructor(props) {
		super(props);
		if (this.props.type == 'good') {
			this.list = good;
		} else if (this.props.type == 'calm') {
			this.list = calm;
		} else {
			this.list = bad;
		}
		this.state = {
			renqun: this.props.loginUser.renqun,
		}
	}

	render() {
		let {loginUser} = this.props;
		let item = this.list.map((p, i) => {
			if (i % 4 == 0) {
				var item_zu = this._list4(i);
			} else {
				var item_zu = (null);
			}
			return (
				<View key={i}>
					{item_zu}
				</View>
			)
		})
		return (
			<View>
				<List style={styles.divideList}>
					<Text style={styles.divideTitle}>积极向上，朵朵小太阳</Text>
				</List>
				<ItemEmotion type='good'/>
				<List style={styles.divideList}>
					<Text style={styles.divideTitle}>清风徐来，水波不兴</Text>
				</List>
				<ItemEmotion type='calm'/>
				<List style={styles.divideList}>
					<Text style={styles.divideTitle}>月落乌啼霜满天</Text>
				</List>
				<ItemEmotion type='bad'/>
			</View>
		)
	}

	_list4(i) {
		var new_list = this.list.slice(i, i + 4);
		var click = new_list.map((p, i)=> {
			return (
				<Button transparent key={i} style={styles.oneEmotion} onPress={this.solve.bind(this, p)}>
					<Image source={p.img} style={styles.oneEmotionImg}/>
					<Text style={styles.oneEmotionTitle}>{p.title}</Text>
				</Button>
			)
		})
		return (
			<ListItem style={styles.contentList}>
				{click}
			</ListItem>
		)
	}

	solve(p) {

		this.props.dispatch(updateMyEmotion(p));
		toast.show(this.state.renqun)
		request.getJson(urls.apis.NOW_EMOTION, {
			name: p.title,
			renqun: 'high_quality_population',
		}).then((data)=> {
			if (data.success) {
				Actions['myEmotionSolve']({data: data.obj});
			}
		}, (error)=> {

		})


	}

}


const styles = {
	contentList: {
		borderColor: '#fff',
		paddingTop: 0,
		paddingBottom: 0,

	},
	oneEmotion: {
		marginBottom: 0,
		marginTop: 0,
		marginRight: 0,
		marginLeft: 0,
		flexDirection: 'column',
		alignItems: 'flex-start',
		height: 80,
	},
	oneEmotionImg: {
		width: 50,
		height: 50,
	},
	oneEmotionTitle: {
		color: '#676767',
		textAlign: 'center',
		marginLeft: 13,
		fontSize: theme.DefaultFontSize - 2,
	},
};

const mapStateToProps = state => ({
	loginUser: state.user.loginUser,
});
export default connect(mapStateToProps)(ItemEmotion);
