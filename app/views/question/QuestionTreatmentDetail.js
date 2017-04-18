import React, {PureComponent} from "react";
import {View, Image, Dimensions} from "react-native";
import {connect} from "react-redux";
import {Text} from "native-base";
import {Container, Content, Header} from "../../components/index";
import Video from "react-native-video";
import {theme, urls, request} from "../../utils/";

let profession = {
    "ok": true,
    "obj": {
        "id": "0128340-123759183481635-91328749123",
        "name": "拔罐疗法",
        "detail": "取穴：中脘、三阴交、天枢、巨阙、大横、腹结。\n操作：每次选用4-5穴，根据患者肥胖程度选用大号或中号火罐，以闪火法拔罐，留罐10-20min，每日1次，15次为1个疗程。",
        "type": "拔罐"
    }
};

class QuestionTreatmentDetail extends PureComponent {
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
            // res = profession;
            this.setState({
                profession: res.obj,
            })
        })
    }

    render() {
        if (JSON.stringify(this.state.profession) != '{}') {
            let {profession} = this.state;
            var content = profession.detail;
            if (!content) {
                content = this.props.data.principle;
            }
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
export default connect(mapStateToProps)(QuestionTreatmentDetail);
