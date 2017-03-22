//noinspection JSAnnotator
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Text, Button} from "native-base";
import {View, Image, DeviceEventEmitter, TouchableHighlight} from "react-native";
import {Actions} from "react-native-router-flux";

/**
 * 我的情绪
 */
class MyEnter extends PureComponent {
    constructor(props) {
        super(props);
    }


    render() {
        let  itemStyle1 = Object.assign({}, styles.button, styles.mgl10);
        let  itemStyle = Object.assign({}, styles.button, styles.mgl);
        return (
            <View>
                <View style={styles.View}>
                    <Button style={itemStyle1} transparent onPress={()=>Actions.myEmotion()}>
                        
                        <Image source={require('../assets/langh.png')} style={styles.image}/>
                        
                        <Text style={styles.text}>情绪调和</Text>
                    </Button>
                    <Button style={itemStyle} transparent onPress={()=>Actions.myEnergy()}>
                        
                        <Image source={require('../assets/drill.png')} style={styles.image}/>
                        
                        <Text style={styles.text}>我的能量场</Text>
                    </Button>
                    
                </View>
                <View style={styles.View}>
                    <Button style={itemStyle1} transparent onPress={()=>Actions.myQuestion()}>
                        
                        <Image source={require('../assets/adjust.png')} style={styles.image}/>
                        
                        <Text style={styles.text}>疑症自调</Text>
                    </Button>
                    <Button style={itemStyle} transparent onPress={()=>Actions.myExpect()}>
                        
                        <Image source={require('../assets/love.png')} style={styles.image}/>
                        
                        <Text style={styles.text}>完美秘籍</Text>
                    </Button>
                </View>
            </View>
            
        )
    }

}

const styles = {
    View:{
        flexDirection:'row',
        marginTop:1
    
    },
    button:{
        flexDirection:'row',
        height:60,
        justifyContent: 'center',
        flex: 1,
        alignSelf:'stretch',
        backgroundColor:'rgba(255, 255, 255, 0.3)',
        
        
    },
    mgl:{
        marginLeft:1
    },
    mgl10:{
        marginLeft:6
    },
    text:{
        color:'#fff'
    },
    badge:{
        backgroundColor: '#AED9E5',
        paddingTop:6,
        paddingBottom:6,
        paddingLeft:6,
        paddingRight:6,
        borderRadius:48,
    },
    image:{
        width:32,
        height:32,
    },
    color2:{
        backgroundColor: '#E5B2A8',
    },
    color3:{
        backgroundColor: '#D5E1AF',
    },
    color4:{
        backgroundColor: '#CABBD3',
    },
};
function bindAction(dispatch) {
    return {
    };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(MyEnter);
