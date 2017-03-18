import React, {PureComponent} from "react";
import {View, Alert, TextInput, TouchableOpacity, ToastAndroid, ListView} from "react-native";
import {connect} from "react-redux";
import {Text} from "native-base";
import {Container, Content, Header} from "../../components/index";

/**
 * 消息
 */
class Message extends PureComponent {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }
    render(){
        return (
            <Container>
                <Header {...this.props}/>
                <Content padder>
                    <View style={{flex: 1, paddingTop: 22}}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) => <Text>{rowData}</Text>}
                        />
                    </View>
                </Content>
            </Container>
        )
    }
}
const styles = {

};

function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Message);