import React, {PureComponent} from "react";
import {View, Image, Dimensions, ScrollView} from "react-native";
import {connect} from "react-redux";
import {Text} from "native-base";
import Video from "react-native-video";

/**
 * 问题，期望展示组件
 */
class QuestionText extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            daily: {}
        }
    }

    componentWillMount() {
        let id = this.props.data;
        if(this.props.from === 'question'){
            var url = urls.apis.DISEASE_GETDISEASEDAILYMETHODDETAIL;
        }else if(this.props.from === 'expect'){
            var url = urls.apis.EXPECT_GETEXPECTDAILYMETHODDETAIL;
        }else {
            var url = urls.apis.HEALTH_GETHEALTHDAILYMETHODDETAIL;
        }
        if(id){
            request.getJson(url, {
                id,
            }).then((res) => {
                this.setState({
                    daily: res.obj[0],

                })
            }).catch((error)=>{
                console.log("Api call error");
            });
        }
    }

    render() {
        if (JSON.stringify(this.state.daily) != '{}') {
            var {daily} = this.state;
            var content = daily.threeCharacterClassic + "\n" + daily.detail;

            content = content.split('\\t').join('');
            content = content.split('\\n').join('\n');
            var e = new RegExp('\n', "g");
            content = content.replace(e, '\n        ');

            var nu = ( <View style={{height: 20,}}></View> );
            return (
                <ScrollView style={styles.scrollView}>
                    <View style={styles.view}>
                        {this.renderImg('/aged'  + daily.img)}
                        <Text style={styles.contentText}>        {content}</Text>
                    </View>
                </ScrollView>
            )
        }
        return null;
    }

    renderImg(img) {
        let ext = img.substring(img.indexOf(".") + 1);
        if (ext == 'mp3' || ext == 'wav' || ext == 'm4a') {
            return (
                <Video source={{uri: urls.getImage(img)}} // 视频的URL地址，或者本地地址，都可以.
                       rate={1.0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
                       volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
                       muted={false}                // true代表静音，默认为false.
                       paused={false}               // true代表暂停，默认为false
                       resizeMode="cover"           // 视频的自适应伸缩铺放行为，
                       repeat={true}                // 是否重复播放
                       playInBackground={false}     // 当app转到后台运行的时候，播放是否暂停
                       playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
                       onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
                       onLoad={this.setDuration}    // 当视频加载完毕时的回调函数
                       onProgress={this.setTime}    //  进度控制，每250ms调用一次，以获取视频播放的进度
                       onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
                       onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
                />
            )
        } else {
            return (
                <Image source={{uri: urls.getImage(img)}} style={styles.image}/>
            )
        }
    }

}

const styles = {
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        //  alignItems:'center',
    },
    contentText: {
        fontSize: theme.DefaultFontSize,
        marginLeft: 30,
        marginRight: 30,
        lineHeight: 28,
    },
    image: {
        margin: 20,
        width: theme.deviceWidth * 0.78,
        height: 200,
    },
    scrollView: {
        marginBottom: 10,
    }
};

/*QuestionText.propsTypes = {
 data: React.PropTypes.string,

 }*/

export default QuestionText


