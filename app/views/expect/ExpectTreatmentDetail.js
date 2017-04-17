import React, {PureComponent} from "react";
import {View, Image, Dimensions} from "react-native";
import {connect} from "react-redux";
import {Text} from "native-base";
import {Container, Content, Header} from "../../components/index";
import Video from "react-native-video";
import {theme, urls, request} from "../../utils/";

let profession = {
    "ok":true,
    "obj": {
        "id": "46ads1f3-asd4f6ads4f3asd1fa3-sd2f1as3df",
        "name": "茉莉花茶",
        "material": "茉莉花10克，玫瑰花10克，荷叶10克，草决明10克，枳壳10克，泽兰12克，泽泻12克，桑葚15克，补骨脂15克，何首乌15克。",
        "makingMethod": "上药用水煎。",
        "usageMethod": "\t每日1剂，每剂分2次代茶饮。",
        "type": "药用奇方",
    }
};

class ExpectTreatmentDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            profession: {}
        }
    }

    componentWillMount() {
        let {id} = this.props.data;
        request.getJson(urls.apis.DISEASE_GETDISEASEPROFESSIONALMETHODLIST, {
            id,
        }).then((res) => {
            res = profession;
            this.setState({
                profession: res.obj,
            })
        })
    }

    render() {
        if (JSON.stringify(this.state.profession) != '{}') {
            let {profession} = this.state;
            var content = '制作方法：' +profession.material+'\n材料：'+profession.makingMethod+'\n使用方法:'+profession.usageMethod;
            content = content.split('\\t').join('');
            content = content.split('\\n').join('\n');
            var e = new RegExp('\n', "g");
            content = content.replace(e, '\n        ');
        }
        return (
            <Container style={styles.container} delay>
                <Header {...this.props}/>
                <Content style={styles.content}>
                    <View style={styles.from}>
                        <Text>{this.props.title} > 自疗方案 > 专业疗法 > {this.props.data.name}</Text>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.contentText}>        {content}</Text>
                    </View>
                </Content>
            </Container>
        )
    }

}

const styles = {
    container: {
        backgroundColor: '#fff',
    },
    content: {
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    from: {
        backgroundColor: '#F0F0F0',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 26,
    },
    view: {
        flex: 1,
        paddingTop: 20,
    },
    contentText: {
        fontSize: theme.DefaultFontSize,
        marginLeft: 30,
        marginRight: 30,
        lineHeight: 28,
    },
    image: {
        margin: 20,
        width: Dimensions.get('window').width - 35,
        height: 200,
    }
}

const mapStateToProps = state => ({
    renqun: state.user.loginUser.renqun,
});
export default connect(mapStateToProps)(ExpectTreatmentDetail);
