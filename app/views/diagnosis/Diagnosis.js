import React, {PureComponent} from "react";
import {View, ScrollView, TouchableHighlight, TouchableOpacity, TextInput} from "react-native";
import {Text} from "native-base";
import {observer} from "mobx-react/native";
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

/**
 * 自诊
 */
@observer
export default class Diagnosis extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }


    render() {
        const {isFetching, diagnosisDisease} = diagnosisStore;
        // const {diagnosisList} = this.state;
        return (
            <Container>
                <Header {...this.props}/>
                {!isFetching && <View style={styles.content}>
                    <Text style={styles.h1}>在以下问题中选出您存在的问题</Text>
                    <View style={styles.questionList}>
                        <ScrollView style={{flex: 1}}>
                            <View style={styles.oneLine}>
                                <CommonList items={diagnosisList[0]} onItemAdd={(item) => this._onItemAdd(item)}/>
                                <CommonList items={diagnosisList[1]} onItemAdd={(item) => this._onItemAdd(item)}/>
                            </View>
                            <View style={styles.oneLine}>
                                <CommonList items={diagnosisList[2]} onItemAdd={(item) => this._onItemAdd(item)}/>
                                <CommonList items={diagnosisList[3]} onItemAdd={(item) => this._onItemAdd(item)}/>
                            </View>
                            <View style={styles.customize}>
                                <TextInput style={styles.textInput} onChangeText={(text) => this.setState({text})}
                                           value={this.state.text} placeholder="找不到您的问题？那就写下来吧！"
                                           multiline={true}
                                           underlineColorAndroid="transparent"/>
                                <TouchableHighlight style={styles.customizeButton}>
                                    <Text style={styles.customizeButtonText}>确定</Text>
                                </TouchableHighlight>
                            </View>
                        </ScrollView>
                        <View style={styles.questionChoosed}>
                            <ScrollView style={styles.choosedScrollView}>
                                {this.renderChoosed(diagnosisDisease)}
                            </ScrollView>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight style={styles.button}>
                                    <Text style={styles.buttonText}>完成自诊去自疗</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.button} onPress={()=>Actions.evaluation()}>
                                    <Text style={styles.buttonText}>提交并继续自诊</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>

                </View>
                }
                <Loading isShow={isFetching}/>
            </Container>
        )
    }

    renderChoosed(diagnosis) {
        let list = diagnosis.map((item, index) => {
            return (
                <View style={styles.row} key={index}>
                    <Text style={styles.rowTitle}>{item.name}</Text>
                    <TouchableOpacity underlayColor='transparent'>
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

    _onItemAdd(item) {
        diagnosisStore.addDisease(item);

    }

    componentDidMount() {
        diagnosisStore.fetchDiagnosisColumnList();
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
    chooseView:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    row: {
        backgroundColor: '#C2C2C2',
        flexDirection:'row',
        margin:4,
        height:30,
    },
    rowTitle:{
        padding:4,
    },
    deleteChoosed:{
        padding:5,
        fontSize:12,
        fontWeight:'500',
        color:'#fff',
    }
};
