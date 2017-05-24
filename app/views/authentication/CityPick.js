
import React, {PureComponent } from "react";
import {Actions,ActionConst} from "react-native-router-flux";
import AlphabetListView from 'react-native-alphabetlistview';
import {observer} from "mobx-react/native";
import {View, Alert, TextInput, TouchableOpacity} from "react-native";
import {Content} from "../../components/index";
import {Text} from "native-base";
// import cityData from "./assets/city.json";
import UserStore from "../../mobx/userStore";

@observer
 export default class MyComponent extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                A: ['some','entries','are here'],
                B: ['some','entries','are here'],
                C: ['some','entries','are here'],
                D: ['some','entries','are here'],
                E: ['some','entries','are here'],
                F: ['some','entries','are here'],
                G: ['some','entries','are here'],
                H: ['some','entries','are here'],
                I: ['some','entries','are here'],
                J: ['some','entries','are here'],
                K: ['some','entries','are here'],
                L: ['some','entries','are here'],
                M: ['some','entries','are here'],
                N: ['some','entries','are here'],
                O: ['some','entries','are here'],
                P: ['some','entries','are here'],
                Q: ['some','entries','are here'],
                R: ['some','entries','are here'],
                S: ['some','entries','are here'],
                T: ['some','entries','are here'],
                U: ['some','entries','are here'],
                V: ['some','entries','are here'],
                W: ['some','entries','are here'],
                X: ['some','entries','are here'],
                Y: ['some','entries','are here'],
                Z: ['some','entries','are here'],
            }
        };
    }
    componentWillMount(){
        let array={};
        array["A"]=[];
        array["B"]=[];
        array["C"]=[];
        array["D"]=[];
        array["E"]=[];
        array["F"]=[];
        array["G"]=[];
        array["H"]=[];
        array["J"]=[];
        array["K"]=[];
        array["L"]=[];
        array["M"]=[];
        array["N"]=[];
        array["P"]=[];
        array["Q"]=[];
        array["R"]=[];
        array["S"]=[];
        array["T"]=[];
        array["W"]=[];
        array["X"]=[];
        array["Y"]=[];
        array["Z"]=[];

        cityData.allcity.map((item,index)=>{
           if(item.pinyin.slice(0,1)=="a"){
              array["A"].push(item)
           }else if(item.pinyin.slice(0,1)=="b"){
               array["B"].push(item)
           }else if(item.pinyin.slice(0,1)=="c"){
               array["C"].push(item)
           }else if(item.pinyin.slice(0,1)=="d"){
               array["D"].push(item)
           }else if(item.pinyin.slice(0,1)=="e"){
               array["E"].push(item)
           }else if(item.pinyin.slice(0,1)=="f"){
               array["F"].push(item)
           }else if(item.pinyin.slice(0,1)=="g"){
               array["G"].push(item)
           }else if(item.pinyin.slice(0,1)=="h"){
               array["H"].push(item)
           }else if(item.pinyin.slice(0,1)=="j"){
               array["J"].push(item)
           }else if(item.pinyin.slice(0,1)=="k"){
               array["K"].push(item)
           }else if(item.pinyin.slice(0,1)=="l"){
               array["L"].push(item)
           }else if(item.pinyin.slice(0,1)=="m"){
               array["M"].push(item)
           }else if(item.pinyin.slice(0,1)=="n"){
               array["N"].push(item)
           }else if(item.pinyin.slice(0,1)=="p"){
               array["P"].push(item)
           }else if(item.pinyin.slice(0,1)=="q"){
               array["Q"].push(item)
           }else if(item.pinyin.slice(0,1)=="r"){
               array["R"].push(item)
           }else if(item.pinyin.slice(0,1)=="s"){
               array["S"].push(item)
           }else if(item.pinyin.slice(0,1)=="t"){
               array["T"].push(item)
           }else if(item.pinyin.slice(0,1)=="w"){
               array["W"].push(item)
           }else if(item.pinyin.slice(0,1)=="x"){
               array["X"].push(item)
           }else if(item.pinyin.slice(0,1)=="y"){
               array["Y"].push(item)
           }else if(item.pinyin.slice(0,1)=="z"){
               array["Z"].push(item)
           }
       })
        this.setState({
            data:array
        })

    }
    render() {
        return (
        <Content padder>
            <AlphabetListView
                data={this.state.data}
                cell={this.Cell}
                cellHeight={30}
                sectionHeaderHeight={22.5}
                initialListSize={300}
            />
        </Content>

        );
    }

     Cell(item){
        return(
            <TouchableOpacity  style={{height:30}} onPress={()=>{
                UserStore.position.name=item.item.name;
                UserStore.position.city_id=item.item.city_id;
                Actions.pop()
            }}>
                    <Text>{item.item.name}</Text>
            </TouchableOpacity>

        )
    }
}
const styles = {
    textStyle : {
        textAlign:'center',
        color:'#fff',
        fontWeight:'700',
        fontSize:16
    },
    viewStyle :{
        backgroundColor: '#ccc'
    },
    view:{
        padding:10
    }
};