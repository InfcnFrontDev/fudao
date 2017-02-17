import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Content, Left, Right, Body, Text, Row, Thumbnail, Col} from "native-base";
import Header from "../../components/header/base";
import styles from "../about/styles";

class Protocol extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <Header title="用户协议"/>
                <Content padder>
                    <Row style={styles.title}>
                        <Col></Col>
                        <Col style={{width:230}}>
                            <Row>
                                <Col style={{width:80}}>
                                    <Thumbnail square size={80} source={require('../../assets/logo.png')}/>
                                </Col>
                                <Col style={{paddingTop:8}}>
                                    <Text style={styles.titleText}>福道健康环</Text>
                                    <Text>v1.0.0</Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>
                            福道健康环是以个人为中心的健康习惯培养APP。帮助您及时了解您的健康状态，发现和解决您的健康问题，全程记录和预估您的变化过程，配以完善的线下服务体系，为您打造基于您个人的全方位健康生态。
                        </Text>
                    </Row>
                    <Row>
                        <Text style={styles.bold}>关注我们</Text>
                    </Row>
                    <Row>
                        <Text>官方网站：www.infcn.com.cn</Text>
                    </Row>
                    <Row>
                        <Text>微信公众号：infcn430374</Text>
                    </Row>
                    <Row>
                        <Text style={styles.bold}>联系我们</Text>
                    </Row>
                    <Row>
                        <Text>商务合作：fudao@infcn.com.cn</Text>
                    </Row>
                </Content>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Protocol);