import React, {PureComponent} from "react";
import {View, ToastAndroid} from "react-native";
import {ListItem, Button, List, Text} from "native-base";
import {Actions} from "react-native-router-flux";
import {urls, toast} from "../../../utils/index";
import {Modal} from "../../../components/index";
import QuestionText from "../../components/QuestionText";
class TreatmentDailyRow extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalView: null,
        }
    }

    render() {
        let {modalView} = this.state;
        let {rowData, title} = this.props;
        if(rowData.methods){
            if (rowData.type == '饮食') {
                var principle = '宜食' + rowData.suitable + '， 忌食' + rowData.fasting;
                var list = (
                    <List dataArray={rowData.methods} renderRow={(data) => {
                        var jishi = (null);
                        if (data['fasting']) {
                            jishi = (
                                <View style={styles.oneType}>
                                    <View style={styles.title_yishi}>
                                        <Text style={styles.listData}>忌食</Text>
                                    </View>

                                    {this.caipu(data['fasting'], false)}
                                </View>
                            )
                        }
                        return (
                            <ListItem style={styles.list}>
                                <View style={styles.yinshi1}>
                                    <View>
                                        <Text style={styles.gan}>- {data.timePeriod||data.time_period}:</Text>
                                    </View>
                                    <View>
                                        <View style={styles.oneType}>
                                            <View style={styles.title_yishi}>
                                                <Text style={styles.listData}>宜食</Text>
                                            </View>
                                            {this.caipu(data['suitable'], true)}
                                        </View>
                                        {jishi}
                                    </View>
                                </View>
                            </ListItem>
                        )
                    }
                    }/>
                )
            }
            else {
                var principle = rowData.principle.split('\\t').join('');
                var list = (
                    <List dataArray={rowData.methods} renderRow={(data) => {
                        return (
                            <ListItem style={styles.list}>
                                <Button style={styles.button} transparent
                                        onPress={this.showModal.bind(this, data.id)}>
                                    <Text style={styles.gan}>- {data.timePeriod||data.time_period}:</Text>
                                    <Text style={styles.listData}>{data.name}</Text>
                                </Button>
                            </ListItem>
                        )
                    }
                    }/>
                )
            }
            return (
                <View style={styles.container}>
                    <View style={styles.sectionOne}>
                        <Text style={styles.dot}>·</Text>
                        <Text style={styles.data}>{rowData.type}</Text>
                    </View>
                    <Text
                        style={styles.type}>        {principle}</Text>
                    {list}
                    <Modal ref={(e) => this._modal = e}>
                        {modalView}
                    </Modal>
                </View>
            )
        }
        return null;

    }

    caipu(data, flag) {
        var {dispatch, rowData} = this.props;
        shi = data.map((p, i) => {
            return (
                <Button key={i} transparent style={styles.shiwubtn} onPress={() => flag ? Actions['menuKinds']({
                    idOrName: p,
                    arr: data
                }) : false}>
                    <Text
                        style={flag ? styles.shiwutext : styles.color6d}>{p}{i != data.length - 1 ? '、' : ''}</Text>
                </Button>
            )
        })
        return (
            <View style={styles.yishi}>
                {shi}
            </View>
        )
    }

    showModal(data) {
        let modalView = (
            <QuestionText data={data} renqun='aged' from="expect"/>
        )
        this.setState({
            modalView
        })
        this._modal.show();
    }

}

const styles = {
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
    },
    sectionOne: {
        flexDirection: 'row',
    },
    dot: {
        fontWeight: '900',
        fontSize: 40,
        color: '#333',
        lineHeight: 23,
        paddingRight: 10,
    },
    type: {
        paddingLeft: 20,
        paddingRight: 20,
        color: '#6D6D6D',
        fontSize: 14,
    },
    list: {
        borderBottomColor: 'transparent',
        padding: 0,
    },
    button: {
        marginTop: -6,
        marginBottom: -15,
        padding: 0,
    },
    gan: {
        paddingRight: 8,
        color: '#949494',
    },
    data: {
        color: '#353535'
    },
    listData: {
        color: '#949494',
    },
    yinshi1: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

    },
    yishi: {
        flexDirection: 'row',
        marginLeft: 10,
        // marginRight: 180,
        paddingRight: 10,
        flexWrap: 'wrap',
    },
    oneType: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    shiwubtn: {
        margin: 0,
        padding: 0,
        height: 25,
        marginTop: -1,
    },
    shiwutext: {
        color: '#0562B2',
    },
    color6d: {
        color: '#6D6D6D',
    },
}

TreatmentDailyRow.propTypes = {
    rowData: React.PropTypes.object,
    title: React.PropTypes.string,
}

TreatmentDailyRow.defaultProps = {
    rowData: {},
    title: '',
}

export default (TreatmentDailyRow);
