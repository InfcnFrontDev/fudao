import React, {Component} from "react";
import {ScrollView, ListView, View} from "react-native";
import {Left, Right, Body, Form, Item, Text} from "native-base";
import GiftedListView from "../../components/listview/gifted";
import ItemPicture from "./item-picture";

const datas = [
    {
        text: '李维嘉发伤心感慨 节目现场崩溃大哭 何炅谢娜话里露玄机',
        note: 'Its time to build a difference . .',
    },
    {
        text: '杭州5名公交司机照片挂车厢征婚 一人已脱单',
        note: 'One needs courage to be happy and smiling all time . . ',
    },
    {
        text: '儿童误将药丸当糖豆带到幼儿园分享 致4人中毒',
        note: 'Live a life style that matchs your vision',
    },
    {
        text: '河南夫妻吵架醉酒丈夫挥刀断指 已被成功接活',
        note: 'Failure is temporary, giving up makes it permanent',
    },
    {
        text: '女子虐打男童被拘：孩子系花钱买来 是否涉拐卖儿童待查',
        note: 'The biggest risk is a missed opportunity !!',
    },
    {
        text: '男子硕士学历月薪上万 占共享单车喷漆还加儿童座',
        note: ''
    }
];

class TabList extends Component {

    render() {
        return (
            <GiftedListView
                rowView={this._renderRowView.bind(this)}
                onFetch={this._onFetch.bind(this)}
                firstLoader={true}
                pagination={true}
                refreshable={true}
                withSections={false}
                enableEmptySections={true}
                locked={true}
            />
        )
    }

    _onFetch(page = 1, callback, options) {
        setTimeout(() => {
            callback(datas);
        }, 1000); // simulating network fetching
    }

    /**
     * Render a row
     * @param {object} rowData Row data
     */
    _renderRowView(rowData) {
        return (
            <ItemPicture data={rowData}/>
        );
    }

}
export default (TabList);