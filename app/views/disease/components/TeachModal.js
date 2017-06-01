import React, {PureComponent} from "react";
import {Modal, View,Text,Image,TouchableOpacity,ScrollView} from "react-native";
import {Button} from "native-base";
import {Container, Content} from "../../../components/index";
import allDiseaseListStore from "../../../mobx/allDiseaseListStore";
import allExpectListStore from "../../../mobx/allExpectListStore";
import questionStore from "../../../mobx/questionStore";
import Swiper from "react-native-swiper"
export default class TeachModal extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }
    onPressEvent(){

    }
    render() {
        let {visible,pageKey} = this.props;
        let data = [
            {
                "acupoint": "膈俞",
                "part": "背部",
                "location": "在脊柱区，第7胸椎棘突下，后正中线旁开1.5寸。",
                "healthEffect": "活血行血，补血养血。",
                "healthMethod": "他人代为按揉。施术者两手置于被施术者上背部，双手拇指指腹分别按揉两侧的膈俞穴。按揉的手法要均匀、柔和，以局部有酸痛感为佳。早晚各1次，每次按揉2～3分钟，两侧膈俞穴同时按揉。",
                "simpleAcupointSelection": "在肩胛下角水平连线，后正中线旁开2横指处。",
                "mattersNeedAttention": null,
                "contraindication": null,
                "img": "/disease/photo/jiashutou.jpg",
            },
            {
                "acupoint": "膈俞",
                "part": "背部",
                "location": "在脊柱区，第7胸椎棘突下，后正中线旁开1.5寸。",
                "healthEffect": "活血行血，补血养血。",
                "healthMethod": "他人代为按揉。施术者两手置于被施术者上背部，双手拇指指腹分别按揉两侧的膈俞穴。按揉的手法要均匀、柔和，以局部有酸痛感为佳。早晚各1次，每次按揉2～3分钟，两侧膈俞穴同时按揉。",
                "simpleAcupointSelection": "在肩胛下角水平连线，后正中线旁开2横指处。",
                "mattersNeedAttention": null,
                "contraindication": null,
                "img": "/disease/photo/chenqicao.jpg",
            },
        ]


        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={visible}
                onRequestClose={() => {}}
            >
                <View style={styles.opacityView}/>
                <View style={styles.content}>
                    {/*<Swiper style={styles.wrapper}*/}
                            {/*sdot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7}} />}*/}
                            {/*activeDot={<View style={{backgroundColor: '#f1f1f1', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}*/}
                            {/*paginationStyle={{bottom: 50}}*/}
                            {/*loop={false}>*/}
                        {/*<View style={styles.row}>*/}
                            {/*<Image style={styles.image} source={require('../../../assets/bg/my.jpg')}/>*/}
                        {/*</View>*/}
                        {/*<View style={styles.row}>*/}
                            {/*<Image style={styles.image} source={require('../../../assets/bg/my.jpg')}/>*/}
                        {/*</View>*/}
                    {/*</Swiper>*/}
                    <Swiper
                        style={styles.wrapper}
                        showsButtons={false}
                        showsPagination={true}
                        height={theme.deviceHeight}
                        paginationStyle={{bottom: 15}}
                        activeDot={<View style={{backgroundColor: '#00cf92', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}

                    >
                        {
                            data.map((item, index)=> {
                                return (
                                    <View key={index}>
                                        <Image style={styles.img} source={{uri:urls.getImage(item.img)}}/>
                                        <ScrollView>
                                            <View style={styles.box}>
                                                <Text style={styles.text}>穴位名称：{item.acupoint}</Text>
                                                <Text style={styles.text}>部位：{item.part}</Text>
                                                <Text style={styles.text}>相关器官：{item.location}</Text>
                                                <Text style={styles.text}>穴位保健效果：{item.healthEffect}</Text>
                                                <Text style={styles.text}>穴位保健方法：{item.healthMethod}</Text>
                                                <Text style={styles.text}>简便取穴法：{item.simpleAcupointSelection}</Text>
                                            </View>
                                        </ScrollView>

                                    </View>
                                )
                            })
                        }
                    </Swiper>

                    <Button onPress={() => questionStore.teachModalShow= false} style={styles.button}>
                        <Text>知道了</Text>
                    </Button>
                </View>
            </Modal>
        )
    }
}

const styles = {
    opacityView: {
        flex: 1,
        backgroundColor: '#6c6c6c',
        opacity: 0.8,
    },
    content: {
        position: "absolute",
        backgroundColor: '#FFFFFF',
        left: 0,
        right: 0,
    },
    box: {
        alignItems: 'center',
        margin: 10,
    },
    img: {
        width: theme.deviceWidth,
        height: 200,
    },
    text: {
        marginTop: 10,
    },
    button: {
        width: 100,
        position: 'absolute',
        left:theme.deviceWidth/2 -50,
        bottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
};

