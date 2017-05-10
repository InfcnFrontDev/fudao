import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {View, Image, DeviceEventEmitter, ScrollView, Text} from "react-native";
import {Container, Content, Header,Modal} from "../../components/index";
import MyDiseaseList from "./components/MyDiseaseList";
import DiseaseMethodTabView from "./components/DiseaseMethodTabView";
import QuestionText from "../components/QuestionText"
import DetailModal from "./components/DetailsModal"
import healthMethodStore from "../../mobx/healthMethodStore";

/**
 * 我的问题
 */
@observer
export default class Health extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            img: "",
            detail: ""
        };

    }
    fetchWeather(){
        let self = this
        request.getJson(urls.apis.HEALTH_GETSOLARTERM)
            .then((result) => {
                if (result.ok && result.obj) {
                    let data = result.obj[0]
                    self.setState({
                        name: data.name,
                        img: data.img,
                        detail: data.detail
                    })
                } else {
                    tools.showToast('请求出错！')
                }
            }).catch((error)=>{
            console.log("Api call error");
        });
    }
    componentDidMount(){
        this.fetchWeather()
        healthMethodStore.fetchHealthMethod()
    }


	render() {
        let {healthMethod,modalShow,questionId} = healthMethodStore;
		return (
			<Container>
				<Header {...this.props}/>
				<Content delay>
                    <View style={styles.container}>
                        <Image source={{uri: urls.getImage(this.state.img)}} />
                        <View style={styles.box}>
                            <Text style={styles.name}>{this.state.name}</Text>
                            <Text style={styles.detail}>{this.state.detail}</Text>
                        </View>
                    </View>
					<DiseaseMethodTabView data={healthMethod}  pageKey={'health'}/>
				</Content>
                <DetailModal visible={modalShow} pageKey={'health'}>
                    <QuestionText data={questionId} from={'health'}/>
                </DetailModal>
			</Container>
		)
	}
}

const styles = {
    container:{
        height: 140,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 30
    },
    box: {
        justifyContent: 'center'

    },
    name: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'SanFrancisco'
    },
    detail: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Microsoft YaHei'
    },
	title: {
		fontSize: theme.DefaultFontSize,
		color: '#FFF',
		fontWeight: '400',
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 12,
	}
}
