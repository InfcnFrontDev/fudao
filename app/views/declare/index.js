import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Content, Left, Right, Body, Text, Row, Thumbnail, Col} from "native-base";
import Header from "../../components/header/base";
import styles from "../about/styles";

class Declare extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <Header title="隐式声明"/>
                   <Content padder>
                   <Row style={styles.title}>
                        <Text style={styles.titleText}>隐私声明</Text>
                    </Row>
                    <Row style={{marginTop:20}}>
                        <Text style={styles.desc}>“福道健康环”是福道时代（北京）健康科技有限公司（以下简称“福道”）推出的一款健康医疗智能APP。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>福道非常重视对您的个人隐私保护，有时候我们需要某些信息才能为您提供您请求的服务，本隐私声明解释了这些情况下的数据收集和使用情况。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>本隐私声明适用于福道健康环的所有相关服务，随着福道健康环服务范围的扩大，隐私声明的内容可由福道随时更新，且毋须另行通知。更新后的隐私声明一旦在app上公布即有效代替原来的隐私声明。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.bold}>一、 获取信息范围</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>通常，您能在匿名的状态下访问福道健康环并获取信息。当我们需要能识别您的个人信息或者可以与您联系的信息时，我们会征求您的同意。通常，在APP使用过程中，福道需要判断您的健康状态和健康问题，并为您设计准确的健康方案，因此，在您注册福道健康环、申请开通新的功能、修改个人信息和日常应用福道健康环产品时，我们会在征得您的同意后，对一些信息进行采集，具体如下：年龄、性别、出生日期、位置、基本身体指标（身高、体重）、病史、生活习惯、精神状况、体检信息、通过智能设备获取的身体指标。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>福道严格保护您个人信息的安全。我们使用各种安全技术和程序来保护您的个人信息不被未经授权的访问、使用或泄露。</Text>
                    </Row>
                    <Row>
                        <Text style={styles.bold}>二、 信息使用途径</Text>
                    </Row>
                    <Row>
                        <Text>福道会在法律要求或符合福道的相关服务条款、软件许可使用协议约定的情况下透露您的个人信息，或者有充分理由相信必须这样做才能：</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>a) 满足法律或行政法规的明文规定，或者符合福道健康环适用的法律程序；</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}> b) 符合福道健康环相关服务条款、软件许可使用协议的约定； </Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}> c) 保护福道的权利或财产; </Text>
                    </Row>
                    <Row>
                        <Text style={styles.bold}>三、 免责声明</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>就下列相关事宜的发生，福道不承担任何法律责任：</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}>a)由于您将用户密码告知他人或与他人共享注册帐户，由此导致的任何个人信息的泄露，或其他非因福道原因导致的个人信息的泄露；</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}> b)福道根据法律规定或政府相关政策要求提供您的个人信息</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}> c) 任何第三方根据福道各服务条款及声明中所列明的情况使用您的个人信息，由此所产生的纠纷；</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}> d)任何由于黑客攻击、电脑病毒侵入或政府管制而造成的暂时性网站关闭；</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}> e) 因不可抗力导致的任何后果；</Text>
                    </Row>
                    <Row>
                        <Text style={styles.desc}> f) 福道在各服务条款及声明中列明的使用方式或免责情形。</Text>
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
export default connect(mapStateToProps, bindAction)(Declare);