/**
 * Created by ljunb on 2016/12/14.
 */
import {observable, runInAction, computed, action} from 'mobx'

class EmotionStore {
    @observable updateTime = null;
    @observable myEmotion = null;
    @observable microcosmic = [];
    @observable gradeList = [];

    @action
    updateMyEmotion(emotion){
       this.myEmotion=emotion;
    };
    @action
    updateMyTime(updateTime){
        this.updateTime=updateTime;
    };
    @action
    microcosmicList(microcosmic){
        this.microcosmic=microcosmic;
    };
    @action
    grade(list){
        this.gradeList=list;
    };
    @action
    microcosmicClick = async(updateTime) => {
        this.updateTime=updateTime;
    };
    @action
    getEmotionIntervene (ob,callback){
        request.getJson(urls.apis.EMOTION_GETEMOTIONINTERVENE, {
            emotion: ob.emotion,
            grade:ob.grade
        }).then((data) => {
            callback(data.obj,ob.word,ob.img);
        })
    }
    @action
    submmitHuanjie(name){
        let c=0;
        for(var i=0;i<this.gradeList.length;i++){
            if(this.gradeList[i].value){
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
        for(var i=0;i<this.microcosmic.length;i++){
            if(this.microcosmic[i].value){
                weiguan.push(this.microcosmic[i].name);
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

const emotionStore = new EmotionStore();
export default emotionStore