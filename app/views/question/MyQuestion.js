import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {View, Image, DeviceEventEmitter, ScrollView,Text} from "react-native";
import {Right,Button} from "native-base";
import {Container, Content, Header,Modal} from "../../components/index";
import QuestionMyself from "./components/QuestionMyself";
import QuestionAll from "./components/QuestionAll";
import SelfDiagnosis from "./components/SelfDiagnosis";
import {fetchAllQuestions, fetchMyQuestions, addToMyQuestions, removeMyQuestion} from "../../actions/question";

/**
 * 我的问题
 */
class MyQuestion extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalView: null,
        }
    }

    render() {
        let {allQuestions, myQuestions, myQuestionMap} = this.props;
        let {modalView} = this.state;
        return (
            <Container>
                <Header {...this.props} right={
                    <Right>
                        <Button transparent onPress={this.showModal.bind(this)}>
                            <Text style={styles.zizhen}>自诊</Text>
                        </Button>
                    </Right>
                }/>
                <Content delay>
                    <ScrollView>
                        <QuestionMyself
                            title="我的问题"
                            items={myQuestions}
                            onItemPress={(item) => this._onItemPress(item)}
                            onItemRemove={(item) => this._onItemRemove(item)}/>
                        <QuestionAll
                            items={allQuestions}
                            selectedItem={myQuestionMap}
                            onItemPress={(item) => this._onItemPress(item)}
                            onItemAdd={(item) => this._onItemAdd(item)}/>
                        <Modal ref={(e) => this._modal = e}>
                            {modalView}
                        </Modal>
                    </ScrollView>
                </Content>
            </Container>
        )
    }

    componentDidMount() {
        const {dispatch} = this.props;
        // 抓取所有问题
        dispatch(fetchAllQuestions());
        // 抓取我的问题
        dispatch(fetchMyQuestions());
    }

    /**
     * 按下问题， 打开问题详情
     * @param question
     * @private
     */
    _onItemPress(question) {
        Actions.myQuestionDetail({question})
    }

    /**
     * 从我的问题列表中移除
     * @param question
     * @private
     */
    _onItemRemove(question) {
        const {dispatch} = this.props;
        dispatch(removeMyQuestion(question));
    }

    /**
     * 添加到我的问题列表中
     * @param question
     * @private
     */
    _onItemAdd(question) {
        const {dispatch} = this.props;
        dispatch(addToMyQuestions(question));
    }

    /*
     * 自诊弹框
     * */
    showModal() {
        let modalView = (
            <SelfDiagnosis />
        );
        this.setState({
            modalView
        });
        this._modal.show();
    }

}

const styles = {
    zizhen:{
        color:'#fff',
    }
};

const mapStateToProps = state => ({
    ...state.user,
    ...state.question
});
export default connect(mapStateToProps)(MyQuestion);
