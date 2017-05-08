import React, {PureComponent} from "react";
import {View, ScrollView, TouchableHighlight, TouchableOpacity, TextInput} from "react-native";
import {Text} from "native-base";
import {observer} from "mobx-react/native";
import {Actions} from "react-native-router-flux";
import {Container, Header, Content, Loading} from "../../components/index";
import CommonList from "./components/CommonList"
import diagnosisStore from "../../mobx/diagnosiStore";

var diagnosisList = [
    {
        "title": "北京",
        "list": [
            {
                "id": "17",
                "name": "脱发",
            },
            {
                "id": "13",
                "name": "口腔干燥",
            },

            {
                "id": "13",
                "name": "头痛",
            },
            {
                "id": "12",
                "name": "肥胖",
            },
            {
                "id": "17",
                "name": "呕吐",
            },

        ]
    },
    {
        "title": "40岁用户",
        "list": [
            {
                "id": "17",
                "name": "心绞痛",
            },
            {
                "id": "17",
                "name": "噎食",
            }, {
                "id": "17",
                "name": "高血压",
            },
            {
                "id": "17",
                "name": "慢性支气管炎",
            },

        ]
    },
    {
        "title": "春季",
        "list": [
            {
                "id": "17",
                "name": "骨质疏松",
            },
            {
                "id": "17",
                "name": "咳嗽",
            },

        ]
    },
    {
        "title": "女性",
        "list": [
            {
                "id": "17",
                "name": "晕厥",
            }
        ]
    }
]
var i = 0;
/**
 * 自诊
 */
@observer
export default class Diagnosis extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            diagnosisList: []
        }
    }

    componentWillMount() {
        // var that = this;
        request.getJson(urls.apis.DIAGNOSIS_GETCOMMONDISEASELIST, {
            region: "北京"
        }).then((result) => {
            if (result.ok) {
                this.setState({
                    // diagnosisList:diagnosisList
                    diagnosisList: result.obj
                })
            } else {
                tools.showToast('请求出错！')
            }
        });
        setTimeout(() => {

        }, 600)
    }


    render() {
        const {isFetching, diagnosisDisease} = diagnosisStore;
        const {diagnosisList,text} = this.state;
        i = 0;
        if (diagnosisList.length > 0) {
            return (
                <Container>
                    <Header {...this.props}/>
                    <View style={styles.content}>
                        <Text style={styles.h1}>在以下问题中选出您存在的问题</Text>
                        <View style={styles.questionList}>
                            <ScrollView style={{flex: 1}}>
                                {this.renderList(diagnosisList)}
                                <View style={styles.customize}>
                                    <TextInput style={styles.textInput} onChangeText={(text) => this.setState({text})}
                                               value={this.state.text} placeholder="找不到您的问题？那就写下来吧！"
                                               multiline={true}
                                               underlineColorAndroid="transparent"/>
                                    <TouchableOpacity style={styles.customizeButton} onPress={text?this.addCustomizeDisease.bind(this):null}>
                                        <Text style={styles.customizeButtonText}>确定</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                            <View style={styles.questionChoosed}>
                                <ScrollView style={styles.choosedScrollView}>
                                    {this.renderChoosed(diagnosisDisease)}
                                </ScrollView>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>完成自诊去自疗</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button} onPress={() => this.gotoCeping()}>
                                        <Text style={styles.buttonText}>提交并继续自诊</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                </Container>
            )
        } else {
            return (
                <Container>
                    <Header {...this.props}/>
                    <Loading isShow={isFetching}/>
                </Container>
            )
        }
    }

    renderList(list) {
        const {diagnosisDiseaseOrderBy} = diagnosisStore;
        i = 0;
        var listView = list.map((items, index) => {
            if (items.list.length > 0) {
                i++;
                return (
                    <CommonList key={index} items={items} selectedItem={diagnosisDiseaseOrderBy} onItemAdd={(item) => this._onItemAdd(item)}/>
                )
            }
            return null;
        })
        var res = i <= 2 ?
            (
                <View style={styles.oneLine}>
                    {listView}
                </View>
            )
            :
            listView[0] && listView[1] ?
                (<View>
                    <View style={styles.oneLine}>
                        {listView.slice(0, 2)}
                    </View>
                    <View style={styles.oneLine}>
                        {listView.slice(2,4)}
                    </View>
                </View>)
                :
                (
                    (<View>
                        <View style={styles.oneLine}>
                            {listView.slice(0, 3)}
                        </View>
                        <View style={styles.oneLine}>
                            {listView.slice(3,4)}
                        </View>
                    </View>)
                );

        return res;

    }

    renderChoosed(diagnosis) {
        let list = diagnosis.map((item, index) => {
            return (
                <View style={styles.row} key={index}>
                    <Text style={styles.rowTitle}>{item.name}</Text>
                    <TouchableOpacity underlayColor='transparent' onPress={this.delChoosed.bind(this,index)}>
                        <Text style={styles.deleteChoosed}>一</Text>
                    </TouchableOpacity>
                </ View >
            )
        })
        return (
            <View style={styles.chooseView}>
                {list}
            </View>
        )

    }

    delChoosed(index){
        diagnosisStore.delDisease(index);
    }

    _onItemAdd(item) {
        diagnosisStore.addDisease(item);
    }

    addCustomizeDisease() {
        diagnosisStore.addDisease({
            name:this.state.text
        });
        this.setState({
            text:''
        })
    }

    gotoCeping(){
        diagnosisStore.addMyDiseaseToBackstage();
        Actions.evaluation()
    }

}
const styles = {
    content: {
        flex: 1,
    },
    h1: {
        color: "#fff",
        fontSize: 16,
    },
    questionList: {
        flex: 1,
    },
    oneLine: {
        flexDirection: 'row',
        marginLeft: 14,
        marginRight: 14,
        flexWrap: 'wrap',
    },
    customize: {
        margin: 20,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderWidth: 0.5,
        borderColor: '#fff',
        flexDirection: 'row',
        padding: 8,
    },
    textInput: {
        height: 60,
        flex: 1,
        textAlignVertical: 'top',
        padding: 0,
        margin: 0,
    },
    customizeButton: {
        height: 60,
        backgroundColor: '#C4D2DF',
        borderRadius: 5,
    },
    customizeButtonText: {
        color: '#6B7577',
        fontSize: 18,
        padding: 7,
        // textAlignVertical: 'center',
        paddingTop: 16
    },
    questionChoosed: {
        height: theme.deviceHeight / 3,
        backgroundColor: "#fff",
        flexDirection: 'column'
    },
    choosedScrollView: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        height: 90,
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: "#A1CF00",
        width: 82,
        height: 54,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        padding: 5,
        fontSize: 15,
        textAlign: 'center',
    },
    chooseView: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
        backgroundColor: '#C2C2C2',
        flexDirection: 'row',
        margin: 4,
        height: 30,
    },
    rowTitle: {
        padding: 4,
    },
    deleteChoosed: {
        padding: 5,
        fontSize: 12,
        fontWeight: '500',
        color: '#fff',
    }
};
