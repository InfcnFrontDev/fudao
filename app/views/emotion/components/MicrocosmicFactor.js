
import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {Modal, View, Image, TouchableHighlight,TextInput,ScrollView,TouchableOpacity } from "react-native";
import {Text,Button,ListItem,CheckBox, } from "native-base";
import EmotionStore from "../../../mobx/emotionStore";


/**
 *微观因素组件
 */
@observer
export default class MicrocosmicFactor extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            weiguan:this.props.microcosmic,
        };
        this.select=[];
    }
    componentWillMount(){
        let reasons=this.props.microcosmic;
        for(var i=0;i<reasons.length;i++){
            this.select[i]={};
            this.select[i].name= reasons[i];
            this.select[i].value= false;
        }
        EmotionStore.microcosmicList(this.select)
    }
    render() {
        let weiguan = EmotionStore.microcosmic;
        if (!weiguan)
            return null;
        return (
                    <View style={{height:150}}>
                        <ScrollView style={{height:150}}>
                            {weiguan.map((item,index)=>this.renderCheckBox(item,index))}
                        </ScrollView>
                    </View>
        )
    }
    renderCheckBox(item,index) {
        let rightText = item.name;
      return (
            <ListItem style={{padding:5,borderColor:'transparent'}} key={index}>
                <CheckBox checked={item.value} style={{marginRight:10,borderColor:'#AFAFAF'}} onPress={()=>{this.onClick(index,item)}}/>
                <Text style={{color:"#2F2F2F"}}>{rightText}</Text>
            </ListItem>
        )
    }
    onClick(index,item){
        EmotionStore.microcosmic[index].value=!item.value;
    }
    renderGrade(item,index){
        return(
            <Text key={index}>{item.title}</Text>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop:10,
        paddingBottom:10,
        paddingRight:10,
        paddingLeft:10
    },
    View: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        fontSize: theme.DefaultFontSize ,
    },
    box:{
        marginLeft:10,
        marginTop:38,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    itemText:{
        fontSize:theme.DefaultFontSize-2,

    },
    itemImg:{
        width:50,
        height:50
    },
    emotion:{
        marginTop:-40,
        justifyContent:'center',
        alignItems:'center'
    },


    content: {
        textAlign: 'center',
        fontSize: theme.DefaultFontSize + 2,
        marginLeft: 30,
        marginRight: 30,
        lineHeight: 28,
    },
};


