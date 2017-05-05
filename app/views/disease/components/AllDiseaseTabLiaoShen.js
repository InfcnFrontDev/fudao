import React, {PureComponent} from "react";
import {View, Image, ListView, TouchableHighlight,DeviceEventEmitter} from "react-native";
import {Text, Button} from "native-base";

export default class AllDiseaseTabLiaoShen extends PureComponent {

	static propsTypes = {
		data: React.PropTypes.object,
		selectedItem: React.PropTypes.object,
		onItemAdd: React.PropTypes.func,
		onItemPress: React.PropTypes.func,
	}
	static defaultProps = {
		data: {},
		selectedItem: {},
		onItemAdd: () => console.log('onItemAdd'),
		onItemPress: () => console.log('onItemPress'),
	}

    ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (section1, section2) => section1 !== section2,

    });

    _renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.sectionHeader}>
                <Text style={{fontWeight: 'bold'}}>{sectionID}</Text>
            </View>
        )
    }

    _renderRow(rowData, sectionId, rowId) {
        let {selectedItem, onItemAdd, onItemPress} = this.props;
        let contains = false
        selectedItem.map((item,index)=>{
            if(item.id === rowData.id){
                contains = true;
            }
        })
        return (
            <View style={styles.row}>
                <Button transparent style={{padding: 0, margin: 6}} onPress={() => onItemPress(rowData)}>
                    <View style={styles.rowView}>
                        <Image source={{uri: urls.getImage(rowData.img)}} style={styles.rowimg}/>
                        <Text style={styles.rowTitle}>{rowData.name}</Text>
                        {contains ?
                            <TouchableHighlight underlayColor='transparent'>
                                <Image source={require('../../../assets/arrows_square_check.png')}
                                       style={styles.choose}/>
                            </TouchableHighlight>
                            :
							<TouchableHighlight onPress={() => onItemAdd(rowData)} underlayColor='transparent'>
                                <Image source={require('../../../assets/arrows_square_plus.png')}
                                       style={styles.choose}/>
                            </TouchableHighlight>
                        }
                    </View>
                </Button>
            </View>
        )
    }

	render() {
        let data = this.props.data
        // let data = {
        //     "意外伤害": [
        //     {
        //         "id": "077fbcc94bd843f7a308519bc4f9b532",
        //         "img": "/icons/disease/dianxian.png",
        //         "name": "癫痫",
        //     },
        // ],
        //     "日常问题": [
        //     {
        //         "id": "131f725025e04c1485c9463bcf0e8b86",
        //         "img": "/icons/disease/toutong.png",
        //         "name": "头痛",
        //     },
        //     {
        //         "id": "16b6ead6e3824c319fc67c5e4192c1b0",
        //         "img": "/icons/disease/kouqiangkuiyang.png",
        //         "name": "口腔溃疡",
        //     },
        //     {
        //         "id": "1fd3a62662d24e6390b5e535b0bdf6c4",
        //         "img": "/icons/disease/fuxie.png",
        //         "name": "腹泻",
        //     },
        // ],
        //     "衰老问题": [
        //     {
        //         "id": "17f7d8511be64daf985b883c1dddb1be",
        //         "img": "/icons/disease/fanyingchidun.png",
        //         "name": "反应迟钝",
        //     },
        //     {
        //         "id": "19f67244a0a342c9b57b755c766423c1",
        //         "img": "/icons/disease/feipang.png",
        //         "name": "肥胖",
        //     },
        //     {
        //         "id": "2312515984574208925f87820a72fc75",
        //         "img": "/icons/disease/dabianshijin.png",
        //         "name": "大便失禁",
        //     },
        //     {
        //         "id": "245719653ed042ff9b41abfdfc26a666",
        //         "img": "/icons/disease/niaoshijin.png",
        //         "name": "尿失禁",
        //     },
        //     {
        //         "id": "081f638682084b558d2b3ba08ae89dad",
        //         "img": "/icons/disease/kouqiangganzao.png",
        //         "name": "口腔干燥",
        //     },
        //     {
        //         "id": "103e3f772cc042a78f93d33db53521c7",
        //         "img": "/icons/disease/pifusaoyang.png",
        //         "name": "皮肤瘙痒",
        //     }
        // ]
        // }
        if(data){
            let liaoShen = {}
            for(let k in data){
                liaoShen[k] = data[k].slice()
            }
            data = liaoShen
        }
        return (
			<ListView
                enableEmptySections={true}
                contentContainerStyle={styles.contentContainer}
				dataSource={this.ds.cloneWithRowsAndSections(data)}
				renderSectionHeader={this._renderSectionHeader.bind(this)}
				renderRow={this._renderRow.bind(this)}
				pageSize={4}

			/>
		)
	}

}

const styles = {
	contentContainer: {
		flexDirection: 'row', //设置横向布局
		flexWrap: 'wrap',    //设置换行显示
		width: theme.deviceWidth + 5
	},
	sectionHeader: {
		borderBottomColor: theme.listBorderColor,
		borderBottomWidth: theme.borderWidth,
		width: theme.deviceWidth + 5,
		height: 40,
		paddingLeft: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	row: {
		width: (theme.deviceWidth - 10) / 2,
		height: 60,
		marginLeft: 5,
	},
	rowView: {
		marginLeft: 8,
		marginRight: 8,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	rowTitle: {
		color: '#000',
		flex: 1,
	},
	rowimg: {
		width: 36,
		height: 36,
		marginRight: 4,
	},
	choose: {
		width: 20,
		height: 20,
		justifyContent: 'flex-end',
	}
};
