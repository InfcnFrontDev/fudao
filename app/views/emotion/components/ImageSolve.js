import React, {PureComponent} from "react";
import {Modal, View, Image, TouchableHighlight,ScrollView} from "react-native";
import {Text} from "native-base";


/**
 * 图片展示组件
 */
class ImageSolve extends PureComponent {

    render() {
        let {title,content,img}=this.props;
        return (
            <View  style={styles.container}>
                <View style={{flexDirection: 'column',alignItems: 'center',}}>
                    <Text style={styles.title}>{title}</Text>
                    <Image source={{uri: urls.getImage(img)}} resizeMode='cover' style={styles.image}/>
                    <ScrollView >
                        <View style={{height:130}}>
                            <Text style={styles.content}>        {content}</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: theme.DefaultFontSize + 4,
        marginTop:20,
        marginBottom:10
    },
    content: {
        fontSize: theme.DefaultFontSize,
        marginLeft: 20,
        marginRight: 20,
        marginTop:20,
        color:'#6A6A6A'
    },
    image: {
        marginTop:10,
        width: 220,
        height: 160,
        justifyContent: 'center',
    },
};

ImageSolve.propsTypes = {
    fenji:React.PropTypes.string,
    title: React.PropTypes.string,
    content: React.PropTypes.string,
    img: React.PropTypes.string,
};

export default (ImageSolve);


