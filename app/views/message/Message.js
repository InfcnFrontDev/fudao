import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Content, Header, Separator} from "../../components/index";
import {Actions} from "react-native-router-flux";
import {Text,Thumbnail,View} from "native-base";
import {theme} from "../../utils/index";
import SystemMsg from "./SystemMsg";
import PushMsg from "./PushMsg";
class Message extends Component {

    render() {
        return (
            <Container>
                <Header {...this.props}/>
                <Content gray>
                    <SystemMsg/>
                    <PushMsg/>
                </Content>
            </Container>

        )
    }
}
const styles = {
    con:{
        backgroundColor:'#333'
    }

}

const mapStateToProps = state => ({

});
export default connect(mapStateToProps)(Message);