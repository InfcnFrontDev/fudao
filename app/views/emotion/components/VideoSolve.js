import React, {PureComponent} from "react";
import {Text} from "native-base";
import {View, Image, TouchableOpacity, TouchableHighlight, Dimensions, Modal} from "react-native";
import Video from "react-native-video";
/**
 * 播放器
 */


class VideoSolve extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            btn:true,//true表示暂停
            cc: require('../../../assets/emotion/play.png')
        }
    }

    render() {
        let {title,content,video,index} = this.props;
        return (
            <View style={styles.View}>
                        <Text style={styles.title}>{title}</Text>
                        <View style={styles.btn}>
                            <TouchableOpacity onPress={this._btn.bind(this)}>
                                <View style={{width: 80, height: 80,justifyContent:'center',alignItems:'center'}}>
                                    <Image source={this.state.cc} style={{width: 80, height: 80,resizeMode:'contain'}}></Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.content}>{content}</Text>
                        <Video
                            source={{uri: urls.getImage(video)}} // 视频的URL地址，或者本地地址，都可以.
                            rate={0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.（初始进来是暂停或播放）
                            volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
                            muted={false}                // true代表静音，默认为false.
                            resizeMode="cover"           // 视频的自适应伸缩铺放行为，
                            repeat={false}                // 是否重复播放
                            playInBackground={true}     // 当app转到后台运行的时候，播放是否暂停//
                            playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
                            onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
                            onLoad={this.setDuration}    // 当视频加载完毕时的回调函数
                            onProgress={this.setTime}    //  进度控制，每250ms调用一次，以获取视频播放的进度
                            onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
                            onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
                            style={styles.backgroundVideo}
                            paused={this.state.btn}               // true代表暂停，
                        />
            </View>
        )
    }
    close(){
        let {btn}=this.state;
        if(!btn)
            this.setState({
                btn:true,
                cc: require('../../../assets/emotion/play.png')
            })
    }

    _btn() {
        let {btn}=this.state;
        if (this.state.btn) {
            this.setState({
                btn:!btn,
                cc: require('../../../assets/emotion/pause.png')
            })

        } else {
            this.setState({
                btn:!btn,
                cc: require('../../../assets/emotion/play.png')
            })
        }
    }
}

const styles = {
    View: {
        flex:1,
        flexDirection: 'column',
        alignItems:'center'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex:-1,
    },
    bj: {
        resizeMode: 'contain'
    },
    left: {
        width: 100,
    },
    title: {
        textAlign: 'center',
        fontSize: theme.DefaultFontSize + 8,
        marginTop:40,
        marginBottom:30
    },
    content: {
        textAlign: 'center',
        fontSize: theme.DefaultFontSize + 2,
        lineHeight: 28,
    },
    basis: {
        fontSize: theme.DefaultFontSize,
        lineHeight: 28,
    },
    basisBox:{
        width:'70%',
        marginLeft:30,
        marginRight:30,
    },
    btn: {
        marginBottom: 30
    }
};
VideoSolve.propsTypes = {
    title: React.PropTypes.string,
    content: React.PropTypes.string,
    video: React.PropTypes.string,
}
export default (VideoSolve);


