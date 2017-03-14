import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    TouchableHighlight,
    TouchableOpacity,
    Image
} from 'react-native'
import {Actions} from "react-native-router-flux";
import Swiper from 'react-native-swiper'
import {urls} from "../../utils/";

var images=[];
var index;
export default class FeedbackView extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <View style={{backgroundColor:'#000'}}>
                <Swiper
                   style={{flex:1}}
                   paginationStyle={{bottom:110}}
                   loop={false}
                   index={this.props.i}
                   dot={<View style={{width:8,height:8,backgroundColor:'gray',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
                   activeDot={<View style={{width:8,height:8,backgroundColor:'orange',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
                   >
                    {this.renderImg()}
               </Swiper>
         </View>
        )
    }

    renderImg(){
      var images = this.props.image.split(',');
      var imageViews = [];
        for(var i=0;i<images.length;i++){
            imageViews.push(
                <Image
                    key={i}
                    style={{flex:1,}}
                    resizeMode= {Image.resizeMode.contain}
                    source={{uri:urls.getImage(images[i],900,1220)}}
                >
                <TouchableOpacity onPress={Actions.pop} style={{flex:1}}>
                </TouchableOpacity>
                </Image>
            );
        }
        return imageViews;
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
})
