/**
 * Created by ljunb on 2016/12/14.
 */
import {observable, runInAction, computed, action} from 'mobx'

class EmotionStore {
    @observable updateTime = null;
    @observable myEmotion = null;
    @observable microcosmic = [];

    @action
    updateMyEmotion = async(emotion) => {
       this.myEmotion=emotion;
    };
    @action
    updateMyTime = async(updateTime) => {
        this.updateTime=updateTime;
    };
    @action
    microcosmicList = async(microcosmic) => {
        this.microcosmic=microcosmic;
    };
    @action
    microcosmicClick = async(updateTime) => {
        this.updateTime=updateTime;
    }
}

const emotionStore = new EmotionStore();
export default emotionStore