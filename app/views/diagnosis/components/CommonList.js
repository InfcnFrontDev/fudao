import React, {PureComponent} from "react";
import {View, Image, ListView,TouchableOpacity,ToastAndroid} from "react-native";
import {Text, Button} from "native-base";
/**
 * 常见问题列表组件
 */
class CommonList extends PureComponent {

    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

        this.state = {
            items: props.items,
        }
    }

    render() {
        let {items} = this.state;
        return (
            <View>
                <Text style={styles.title}>{items.title}常见问题</Text>
                <ListView
                    contentContainerStyle={styles.contentContainer}
                    dataSource={this.ds.cloneWithRows(items.list)}
                    renderRow={this._renderRow.bind(this)}
                    enableEmptySections={true}
                />
            </View>

        )
    }

    _renderRow(rowData, sectionId, rowId) {
        let {selectedItem, onItemAdd, onItemPress} = this.props;
        return (
            <View style={styles.row}>
                <Text style={styles.rowTitle}>{rowData.name}</Text>
                {selectedItem[rowData.id] ?
                    <TouchableOpacity underlayColor='transparent'>
                        <Text style={styles.choose}>-</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => onItemAdd(rowData)} >
                        <Text style={styles.choose}>+</Text>
                    </TouchableOpacity>
                }
            </ View >
        )
    }
}

const styles = {
    title: {
        color: "rgba(188,188,188,0.6)",
        marginLeft: 8,
        marginTop:10,
    },
    contentContainer: {
        flexDirection: 'row', //设置横向布局
        flexWrap: 'wrap',    //设置换行显示
        width: (theme.deviceWidth-28) / 2,

    },
    row: {
        width: (theme.deviceWidth - 87) / 4,
        height: 36,
        margin:2,
        marginLeft: 7,
        marginRight: 7,
        padding:4,
        backgroundColor: 'rgba(255,255,255,0.2)',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    rowTitle: {
        color: '#fff',
        flex: 1,
    },
    choose: {
        fontSize:20,
        fontWeight:'100',
        paddingBottom:5,
        color:'#fff',
        justifyContent: 'flex-end',
    }
};

CommonList.propsTypes = {
    items: React.PropTypes.object,
    selectedItem: React.PropTypes.object,
    onItemAdd: React.PropTypes.func,
    onItemPress: React.PropTypes.func,
}
CommonList.defaultProps = {
    items: {},
    selectedItem: {},
    onItemAdd: () => {
    },
    onItemPress: () => {
    },
}

export default (CommonList);
