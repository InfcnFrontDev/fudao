import React, {PureComponent} from "react";
import {Modal, View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import {observer} from "mobx-react/native";
import {Container, Content, Header} from "../../../components/index";
import allDiseaseListStore from "../../../mobx/allDiseaseListStore";
import allExpectListStore from "../../../mobx/allExpectListStore";
import questionStore from "../../../mobx/questionStore";
import Swiper from "react-native-swiper"

@observer
export default class Teach extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            visible: false,
        }
    }

    componentDidMount() {
        // let {pageKey,type} = this.props;
        let {pageKey,type} = questionStore.data
        pageKey === 'disease' ?
            allDiseaseListStore.fetchData(type) : allExpectListStore.fetchData(type)
    }

    render() {
        // let {visible, pageKey} = this.props;
        let {pageKey} = questionStore.data
        let {data} = pageKey === 'disease' ? allDiseaseListStore : allExpectListStore

        return (
            <Container>
                <Header {...this.props}/>
                <Swiper
                    style={styles.wrapper}
                    showsButtons={false}
                    showsPagination={true}
                    height={theme.deviceHeight}
                    paginationStyle={{bottom: 120}}
                    activeDot={<View style={{
                        backgroundColor: '#00cf92',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3,
                    }}/>}

                >
                    {
                        data.length > 0 ? data.map((item, index) => {
                            return (
                                <ScrollView key={index} style={styles.container}>
                                    <View style={styles.headerView}>
                                        <Text style={styles.text}>{'  -' + item.name}</Text>
                                    </View>
                                    <Image style={styles.img} source={{uri: urls.getImage(item.img)}}/>

                                    <View style={styles.box}>
                                        <Text style={styles.text}>部位：{item.part}</Text>
                                        <Text style={styles.text}>相关器官：{item.location}</Text>
                                        <Text style={styles.text}>穴位保健效果：{item.healthEffect}</Text>
                                        <Text style={styles.text}>穴位保健方法：</Text>
                                        <Text style={styles.text1}>{item.healthMethod}</Text>
                                        <Text style={styles.text}>简便取穴法：</Text>
                                        <Text style={styles.text1}>{item.simpleAcupointSelection}</Text>
                                    </View>
                                </ScrollView>
                            )
                        }) : <View/>
                    }
                </Swiper>
            </Container>
        )
    }
}

const styles = {
    container: {
        height: theme.deviceHeight,
        backgroundColor: '#fff',
        padding: 15
    },
    headerView: {
        height: 40,
        justifyContent: 'center',
        marginBottom: 15,
        backgroundColor: '#e4e4e4'
    },
    img: {
        width: theme.deviceWidth - 30,
        height: 200
    },
    box: {
        margin: 10,
    },
    text: {
        marginTop: 10,
    },
};

