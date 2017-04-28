import React, {PureComponent} from "react";
import Swiper from "react-native-swiper";
import {Text, Button} from "native-base";
import {View, Image, ToastAndroid, DeviceEventEmitter, TouchableHighlight} from "react-native";
import ListOperationButton from "./ListOperationButton";

/**
 * 我的问题列表组件
 */
export default class MyDiseaseList extends PureComponent {

	static propTypes = {
		data: React.PropTypes.array,
		selectedItem: React.PropTypes.object,
		onItemPress: React.PropTypes.func,
		onItemRemove: React.PropTypes.func,
	}

	static defaultProps = {
		data: [],
		onItemPress: () => console.log('onItemPress'),
		onItemRemove: () => console.log('onItemRemove'),
	}

	render() {
		let {data} = this.props;
		return (
			<View style={{height: 126}}>
				<Swiper
					height={140}
					loop={false}
					dot={<View style={styles.dot}></View>}
					activeDot={<View style={styles.activeDot}></View>}
				>
					{this.renderPages(data)}
				</Swiper>
			</View>
		)
	}

	renderPages(items) {
		// 将 array 拆分成多个 size 长度的块，把这些块组成一个新数组。
		let pages = _.chunk(items, 4);
		return pages.map((page, i) => this.renderPage(page, i));
	}

	renderPage(page, i) {
		return (
			<View key={i} style={styles.page}>
				{page.map((item, i) => this.renderItem(item, i))}
			</View>
		)
	}


	renderItem(item, i) {
		let {selectedItem} = this.props;
		let btnStyle = {...styles.item};
		if (selectedItem && item.id == selectedItem.id) {
			btnStyle.backgroundColor = theme.brandPrimary;
		}
		return (
			<Button key={i} transparent style={btnStyle}
					onPress={this._onItemPress.bind(this, item)}>
				<Image source={{uri: urls.getImage(item.img)}} style={styles.itemImg}/>
				<Text style={styles.itemTitle}>{item.name}</Text>
				<ListOperationButton iconName={'remove'}/>
			</Button>
		)
	}

	_onItemPress(question) {
		let {onItemPress} = this.props;
		onItemPress(question);
	}

	_onItemRemove(question) {
		const {onItemRemove} = this.props;
		onItemRemove(question);
	}

}

const styles = {
	myself: {
		height: 180,
		backgroundColor: '#F0F0F0',
		borderBottomColor: '#D8D8D8',
	},

	page: {
		flex: 1,
		flexDirection: 'row', //设置横向布局
		flexWrap: 'wrap',    //设置换行显示
		justifyContent: 'flex-start',
	},
	item: {
		width: (theme.deviceWidth - 30) / 2,
		height: 45,
		marginLeft: 10,
		marginRight: 5,
		marginBottom: 10,
		paddingLeft: 6,
		paddingRight: 6,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: '#556794',
	},
	itemTitle: {
		color: '#FFF',
		flex: 1,
	},
	itemImg: {
		width: 36,
		height: 36,
		marginRight: 8,
	},
	choose: {
		width: 20,
		height: 20,
		justifyContent: 'flex-end',
	},
	dot: {
		width: 5,
		height: 5,
		backgroundColor: 'gray',
		borderRadius: 4,
		marginLeft: 3,
		marginRight: 3
	},
	activeDot: {
		width: 5,
		height: 5,
		backgroundColor: '#A1CC00',
		borderRadius: 4,
		marginLeft: 3,
		marginRight: 3
	}
};
