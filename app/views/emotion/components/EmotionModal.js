import React, {PureComponent} from "react";
import {Modal, View, Image, TouchableNativeFeedback} from "react-native";
import {observer} from "mobx-react/native";
import EmotionStore from "../../../mobx/emotionStore";
/**
 * 情绪干预弹框-框
 */
@observer
class EmotionModal extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
        }
    }

    render() {
        let {visible} = this.state;
        let {children} = this.props;
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={visible}
                onRequestClose={() => this.hide()}
            >
                <TouchableNativeFeedback onPress={() => this.hide()}>
                    <View style={styles.opacityView}/>
                </TouchableNativeFeedback>
                <View style={styles.content}>
                    {children}
                </View>
            </Modal>
        )
    }

    /**
     * 打开对话框
     */
    show() {
        this.setState({
            visible: true,
        })
    }

    /**
     * 关闭对话框
     */
    hide() {
        EmotionStore.hide(false)
        this.setState({
            visible: false
        })

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
        backgroundColor: 'rgba(255,255,255,0.4)',
        top: 30,
        bottom: 30,
        left: 20,
        right: 20,
        opacity: 1,
        flex: 1,
    },
};

EmotionModal.propTypes = {
    visible: React.PropTypes.bool,
};
EmotionModal.defaultProps = {
    visible: false,
}

export default  (EmotionModal);

