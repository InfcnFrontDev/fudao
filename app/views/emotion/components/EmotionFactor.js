
import React, {PureComponent} from "react";
import {Modal, View, Image, TouchableHighlight,TextInput,ScrollView,TouchableOpacity } from "react-native";
import {Text,Button,ListItem,CheckBox, } from "native-base";
import MicrocosmicFactor from "./MicrocosmicFactor";
/*import CheckBox from 'react-native-check-box'*/

/**
 * 影响情绪因素， 弹出
 */



export default class EmotionFactor extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            sel:false,
            color:'#fff',
            flag:true,
            grade:null,
            flag1:true,
            selfReason:null
           /* '#008F81'*/
        };
        this.select=[];
        this.grade=[];
        this.selected=[];
        this.selfReason=""
    }

    componentWillMount(){
        let grade=this.props.data.grade;
        let reasons=this.props.data.reasons;
        tools.showToast(JSON.stringify(reasons))

        for(var i=0;i<grade.length;i++){
            this.grade[i]={};
            this.grade[i].name= grade[i].name;
            this.grade[i].title= grade[i].title;
            this.grade[i].value= false;
        }
        this.grade[0].value= true;
        this.setState({
            data:this.props.data,
            img:this.props.emotionImg,
            grade:this.grade,
        });
    }
    render() {
        let {data,img,grade} = this.state;
        let slider=(null);
        if(!data||!img||!grade)
            return null
       if(data.grade.length>1) {
           slider = (
               <View style={{justifyContent: 'center', alignItems: 'center'}}>
                   <View style={styles.slideBox}>
                       <View style={styles.slideText}>
                           {grade.map((item, index)=>this.renderGrade(item, index))}
                       </View>
                       <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                           {grade.map((item, index)=>this.renderSlider(item, index))}
                       </View>
                   </View>
               </View>
           )
       }
        return (
             <View style={styles.container}>
                        <View style={styles.View}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.title}>这样的乌云让你</Text>
                                <Text style={styles.title}>{data.emotion}</Text>
                                <Text style={styles.title}>了</Text>
                            </View>
                            <Image source={require('../../../assets/emotion/wuyun.png')} style={styles.wuyunBox} resizeMode="contain">
                                <View style={styles.box}>
                                    {data.macroscopic.map((item,index)=>this.renderMacroscopic(item,index))}
                                </View>
                            </Image>
                            <View style={styles.emotion}>
                                <Image source={img} style={styles.itemImg}/>
                                <Text style={styles.itemText}>{data.emotion}</Text>
                            </View>
                              {slider}
                            <View style={{marginTop:10,flexDirection:'row'}}>
                                <Text>还有什么让你</Text>
                                <Text>{data.emotion}</Text>
                                <Text>呢？</Text>
                            </View>
                            <MicrocosmicFactor microcosmic={this.props.data.reasons}></MicrocosmicFactor>
                            <View style={{alignItems:'center'}}>
                                <View style={styles.input}>
                                    <TextInput underlineColorAndroid="transparent" placeholder="请输入您的原因" onChangeText={(value)=>{this.selfReason=value}}></TextInput>
                                </View>
                            </View>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <View>
                                    <Button style={{marginTop:10,height:30}}onPress={()=>this.submit(data.emotion)}>
                                        <Text>帮您缓解</Text>
                                    </Button>
                                </View>

                            </View>
                        </View>
                    </View>
        )
    }
    renderMacroscopic(item,index){
        return(
            <View key={index} style={styles.hongGuanBox}>
                <Image source={{uri:urls.getImage(item.img)}} style={styles.hongGuanImg}/>
                <Text style={styles.itemText}>{item.name}</Text>
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
        this.select[index].value=!item.value;
        this.setState({
            weiguan:this.select,
            flag:!this.state.flag,
         })

    }
    renderGrade(item,index){
        return(
            <Text key={index}>{item.title}</Text>
        )
    }
    renderSlider(item,index){
        let color=null;
        if(item.value){
            color='#008F81';
        }else{
            color='#fff';
        }
        return(
            <TouchableOpacity  key={index} onPress={()=>this.selectGrade(item,index)}>
                <View style={{marginRight:5,width:80,height:8,backgroundColor:color}}></View>
            </TouchableOpacity>
        )
    }
    selectGrade(item,index){
        tools.showToast(JSON.stringify(item))
        if(!this.grade[index].value){
            for(var i=0;i<=index;i++){
                this.grade[i].value=true;
            }
        }else{
            for(var i=index;i<this.grade.length;i++){
                this.grade[i].value=false;
            }
        }
        this.grade[0].value=true;
        this.setState({
            grade: this.grade,
            flag1:!this.state.flag1,
        })
    }
    show(data) {
        this.setState({
            show: true,
            data
        })
    }

    hide() {
        this.setState({
            show: false,
            data: null
        })
    }
    submit(name){

        let c=0;
        for(var i=0;i<this.grade.length;i++){
            if(this.grade[i].value){
                c++;
            }
        }
        let fenji=null;
        if(c==1){
            fenji="一级"
        }else if(c==2){
            fenji="二级"
        }else{
            fenji="三级"
        }
        let weiguan=[];
        for(var i=0;i<this.select.length;i++){
            if(this.select[i].value){
                weiguan.push(this.select[i].name);
            }
        }
        if(weiguan.length==0){
            request.getJson(urls.apis.EMOTION_GETEMOTIONINTERVENE, {
              emotion: name,
              grade:fenji,
             }).then((data) => {
                    this.hide();
             })
        }else{
            request.getJson(urls.apis.EMOTION_GETEMOTIONINTERVENE, {
                emotion: name,
                grade:fenji,
                factor:weiguan
            }).then((data) => {

            })
        }



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
    wuyunBox:{
        width:theme.deviceWidth*0.82,
        height:180,
        paddingLeft:35,
        paddingRight:35
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
    hongGuanBox:{
        justifyContent:'center',
        alignItems:'center'
    },
    hongGuanImg:{
        width:40,
        height:40,
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
    slideBox:{
        width:theme.deviceWidth*0.8,
        height:35,
        borderRadius:10,
        backgroundColor:"#EFEFEF",
        justifyContent:'center',

    },
    slideText:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    sliderColor:{
        marginRight:5,
        width:80,
        height:8,
    },
    sliderBlue:{
        marginRight:5,
        width:80,
        height:8,
        backgroundColor:'#008F81'
    },
    content: {
        textAlign: 'center',
        fontSize: theme.DefaultFontSize + 2,
        marginLeft: 30,
        marginRight: 30,
        lineHeight: 28,
    },
    input:{
        width:theme.deviceWidth*0.8,
        height:50,
        borderWidth:1,
        borderColor:'#666',
        padding: 0,

    }
};

