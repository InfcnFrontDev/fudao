import React, {PureComponent} from "react";
import {View, Image, Dimensions} from "react-native";
import {connect} from "react-redux";
import {Text} from "native-base";
import {Container, Content, Header} from "../../components/index";
import {theme, urls, request} from "../../utils/";


class ExpectTreatmentDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            profession: {}
        }
    }

    componentWillMount() {
        let {id} = this.props.data;
        request.getJson(urls.apis.EXPECT_GETEXPECTPROFESSIONALMETHODDETAIL, {
            id,
        }).then((res) => {
            this.setState({
                profession: res.obj,
            })
        })
    }

    render() {
        if (JSON.stringify(this.state.profession) != '{}') {
            let {profession} = this.state;
            var content='';
            if(profession.material){
                content += '制作方法：' +profession.material;
            }
            if(profession.making_method){
                content += '\n材料：' +profession.making_method;
            }
            if(profession.usage_method){
                content += '\n使用方法: ' +profession.usage_method;
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
export default connect(mapStateToProps)(ExpectTreatmentDetail);
