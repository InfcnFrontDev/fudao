import React, {PureComponent} from "react";
import {Modal, View, Image, ListView,ScrollView} from "react-native";
import {Icon, Button, ListItem, Text} from "native-base";
import diseaseMethodStore from "../../../mobx/diseaseMethodStore";
import expectMethodStore from "../../../mobx/expectMethodStore";
import healthMethodStore from "../../../mobx/healthMethodStore";


/**
 * 我的能量场 > 资料填写
 */
class DetailsModal extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    render() {
        let {visible, data, children} = this.props;
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={visible}
                onRequestClose={() => this.hide()}
            >
                <View style={styles.opacityView}/>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <View style={{width: 25}}>
                            <Button
                                onPress={() => this.hide()}
                                style={styles.closeButton}>
                                <Icon name="close" style={{color: '#FFF', fontSize: 20}}/>
                            </Button>
                        </View>
                    </View>
                    <ScrollView style={styles.child}>
                        {children}
                    </ScrollView>
                </View>
            </Modal>
        )
    }

    /**
     * 关闭对话框
     */
    hide() {

        if (this.props.pageKey === 'disease') {
            diseaseMethodStore.modalShow = false
        } else if (this.props.pageKey === 'expect') {
            expectMethodStore.modalShow = false
        } else {
            healthMethodStore.modalShow = false
        }

    }


}


const styles = {
    opacityView: {
        flex: 1,
        backgroundColor: '#6c6c6c',
        opacity: 0.5,
    },
    content: {
        position: "absolute",
        backgroundColor: '#FFFFFF',
        top: 30,
        bottom: 30,
        left: 20,
        right: 20,
        borderRadius: 3,
        opacity: 1,
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 6,
        flexDirection: 'row',
    },
    headerText: {
        fontSize: theme.fontSizeH4
    },
    closeButton: {
        backgroundColor: '#C8C8C8',
        justifyContent: 'center',
        borderRadius: 12,
        width: 24,
        height: 24,
        paddingLeft: 0,
        paddingRight: 0,
    },
};


export default  DetailsModal;

