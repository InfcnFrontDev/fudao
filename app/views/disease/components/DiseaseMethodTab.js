import React, {PureComponent} from "react";
import {ScrollView, View, Image, ListView, TouchableOpacity} from "react-native";
import {Text} from "native-base";
import RelatedProductsAndServices from "./RelatedProductsAndServices";
import {Actions} from "react-native-router-flux";
import diseaseMethodStore from "../../../mobx/diseaseMethodStore";
import expectMethodStore from "../../../mobx/expectMethodStore";
import healthMethodStore from "../../../mobx/healthMethodStore";
import questionStore from "../../../mobx/questionStore";

export default class DiseaseMethodTab extends PureComponent {

    onMethod0Press(idOrName, arr) {
        Actions.menuKinds({
            idOrName: idOrName,
            arr: arr
        })
    }

    onMethod1Press(id,name) {
        questionStore.questionId = id
        questionStore.questionName = name
        questionStore.modalShow = true
    }

    render() {
        let {data} = this.props;
        return (
            <ScrollView>
                {data.type == '饮食' ? this.renderPrinciple0(data) : this.renderPrinciple1(data)}
                {data.type == '饮食' ? this.renderMethod0(data.methods) : this.renderMethod1(data.methods)}
                <RelatedProductsAndServices/>
            </ScrollView>
        )
    }

    renderPrinciple0(data) {
        return (
            <View style={styles.principle}>
                <Text style={styles.text}>{'\t\t宜食：' + data.suitable}</Text>
                {data.fasting ? <Text style={styles.text}>{'\t\t忌食：' + data.fasting}</Text> : null}
            </View>
        )
    }

    renderPrinciple1(data) {
        if(data.principle){
            return (
                <View style={styles.principle}>
                    <Text style={styles.text}>{'\t\t' + data.principle}</Text>
                </View>
            )
        }

    }

    clearNullArr(arr){
        for(let i=0,len = arr.length;i<len;i++){
            if(!arr[i]||arr[i]==''||arr[i] === undefined || arr[i] === null){
                arr.splice(i,1);
                len--;
                i--;
            }
        }
        return arr;
    }

    renderMethod0(methods) {
        let self = this
        return (
            <View style={styles.methods}>
                {methods.map((method, index) => (
                    <View style={styles.method} key={index}>
                        <Text style={styles.text}>{' - ' + method.timePeriod + ' : '}</Text>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.text}>{'宜食：'}</Text>
                                {
                                    (self.clearNullArr(method.suitable)).map((text, index) =>
                                    <TouchableOpacity key={index} onPress={() => this.onMethod0Press(text, method.suitable)}>
                                        <Text style={styles.textLink}>{text + '; '}</Text>
                                    </TouchableOpacity>)
                                }
                            </View>
                            {
                                method.fasting && method.fasting.length != 0 ? <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.redText}>{'忌食：'}</Text>
                                    {method.fasting.map((text, index) =>
                                        <Text key={index} style={styles.text}>{text + '; '}</Text>)}
                                </View> : <View/>
                            }
                        </View>
                    </View>
                ))}
            </View>
        )
    }


    renderMethod1(methods) {
        return (
            <View style={styles.methods}>
                {
                    methods ?
                    methods.map((method, index) => (
                    <View style={styles.method} key={index}>
                        <Text style={styles.text}>{ ' - ' + method.timePeriod + ' : '}</Text>
                        <TouchableOpacity onPress={() => this.onMethod1Press(method.id,method.name)}>
                            <Text style={styles.textLink}>{ method.name}</Text>
                        </TouchableOpacity>
                    </View>)) : <View/>
                }
            </View>
        )
    }

}

const styles = {
    principle: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    methods: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    method: {
        paddingLeft: 20,
        paddingTop: 3,
        paddingBottom: 3,
        flexDirection: 'row',
    },
    text: {
        fontSize: theme.fontSizeH5
    },
    redText: {
        fontSize: theme.fontSizeH5,
        color: 'red'
    },
    textLink: {
        fontSize: theme.fontSizeH5,
        color: '#9FCD2D'
    }
};