import React, {PureComponent} from "react";
import {Modal, View, Image, TouchableHighlight} from "react-native";
import {Text} from "native-base";
import {theme, urls} from "../utils/index";


/**
 * 情绪干预， 弹出
 */
class CoModal extends PureComponent {

    state = {
        show: false,
    };

    render() {
        let {data} = this.state;
        if (!data)
            return null;

        return (
            <Modal
                transparent
                visible={this.state.show}
                onRequestClose={() => this.hide()}
            >
                <TouchableHighlight onPress={() => this.hide()} style={{flex: 1}}>
                    <View style={styles.container}>
                        <View style={styles.View}>
                            <Text style={styles.title}>{data.mitigation_method}</Text>
                            <Text style={styles.content}>{data.method_detail}</Text>
                            <View>
                                <Image source={{uri: urls.getImage("/high_quality_population" + data.img)}} resizeMode='cover'
                                style={styles.image}/>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </Modal>
        )
    }

   /* renderImg(img) {
        let ext = img.substring(img.indexOf(".") + 1);
        if (ext == 'mp3' || ext == 'wav' || ext == 'm4a') {
            return (
                <Video source={{uri: urls.getImage("/high_quality_population" +img)}}></Video>
            )
        } else {
            return (

            )
        }
    }*/


    show(data) {
        this.setState({
            show: true,
            data:data
        })
    }

    hide() {
        this.setState({
            show: false,
            data: null
        })
    }
}

const styles = {
    container: {
        width: theme.deviceWidth,
        height:theme.deviceHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    View: {
        width: theme.deviceWidth*0.8,
        height:theme.deviceHeight*0.8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        backgroundColor: '#fff',
        borderRadius:10
    },
    title: {
        textAlign: 'center',
        fontSize: theme.DefaultFontSize + 6,
        marginBottom: 30,
    },
    content: {
        textAlign: 'center',
        fontSize: theme.DefaultFontSize + 2,
        marginLeft: 30,
        marginRight: 30,
        lineHeight: 28,
    },
    image: {
        marginTop: 20,
        width: 250,
        height: 200,
        justifyContent: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
};

export default (CoModal);

