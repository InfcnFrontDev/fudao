import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Swiper from "react-native-swiper";
import {Text, Button} from "native-base";
import {View, Image, ToastAndroid, DeviceEventEmitter, TouchableHighlight} from "react-native";
import {theme, urls} from "../../../utils/";
import _ from "lodash";

/**
 * 我的问题列表组件
 */
class QuestionMyself extends PureComponent {

    render() {
        let {items, title} = this.props;
        return (
			<View style={styles.myself}>
				<Text style={styles.title}>{title}</Text>
				<Swiper
					height={140}
					loop={false}
					dot={<View style={styles.dot}></View>}
					activeDot={<View style={styles.activeDot}></View>}
				>
                    {this.renderPages(items)}
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
				<TouchableHighlight onPress={this._onItemRemove.bind(this, item)} underlayColor='#fafafa'>
					<Image source={require('../../../assets/arrows_square_minus.png')} style={styles.choose}/>
				</TouchableHighlight>
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
    title: {
        fontSize: theme.DefaultFontSize + 2,
        color: '#000',
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 12,
        marginBottom: 12,
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
        backgroundColor: '#FFF',
        borderColor: '#959595',
        borderWidth: 1,
        borderRadius: 0,
    },
    itemTitle: {
        color: '#000',
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


QuestionMyself.propTypes = {
    title: React.PropTypes.string,
    items: React.PropTypes.array,
    selectedItem: React.PropTypes.object,
    onItemPress: React.PropTypes.func,
    onItemRemove: React.PropTypes.func,
}

QuestionMyself.defaultProps = {
    title: '我的问题',
    items: [],
    onItemPress: () => {
    },
    onItemRemove: () => {
    }
}

const mapStateToProps = state => ({
    ...state.user,
    ...state.question,
});
export default connect(mapStateToProps)(QuestionMyself);
