import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Content, Header} from "../../components/index";
import {View, Image} from "react-native";
import ExpectMyself from "../expect/components/QuestionMyself";
import ExpectTab from "../expect/components/QuestionTab";
import {request, urls, toast} from "../../utils/index";

/**
 * 我的问题详情
 */
class MyExpectDetail extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            expect: props.expect
        }
    }

    render() {
        let {myExpects} = this.props;
        let {expect} = this.state;
        // toast.show('expect'+JSON.stringify(expect.id));
        return (
            <Container style={styles.container}>
                <Header title={expect && expect.name}/>
                <Content delay>
                    <ExpectMyself
                        title="我的期望"
                        items={myExpects}
                        selectedItem={expect}
                        onItemPress={(item) => this._onItemPress(item)}
                        onItemRemove={(item) => this._onItemRemove(item)}
                    />
                    <ExpectTab
                        question={expect}
                        module="expect"
                        url={[urls.apis.EXPECT_GETEXPECTDAILYMETHODDETAIL, urls.apis.EXPECT_GETEXPECTPROFESSIONALMETHODDETAIL]}
                    />
                </Content>
            </Container>
        )
    }

    _onItemPress(expect) {

        let that = this;
        this.setState({
            expect: null
        })
        setTimeout(() => {
            that.setState({
                expect: expect
            })
        }, 300)
    }
}

const styles = {
    container: {},
    content: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        flex: 1,
    },
};

const mapStateToProps = state => ({
    ...state.user,
    ...state.expect,
});
export default connect(mapStateToProps)(MyExpectDetail);
