import React, { 
    Component     
} from 'react'

import {
    StyleSheet,
    View,
    Alert
} from 'react-native'

import globalStyles from '../utils/globalStyles'
import NavBar from '../components/NavBar'
import Editor from '../components/Editor'

export default class FeedbackView extends Component{
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    
    componentWillMount() {
        this.props.route.sendFeedback = this.sendFeedback.bind(this)
    }

    render() {
        return (
            <View style={[styles.container, globalStyles.containerShadow]}>
                <NavBar route={this.props.route} navigator={this.props.navigator}/>
                <Editor
                    enableTools={'emotion'}
                    onChangeText={this.onChangeText.bind(this)} 
                    placeholder={'Hi, Any suggestion to tell us?'}
                    text={this.state.text}/>    
            </View> 
        )
    }
    
    sendFeedback() {
        Alert.alert(
            'Thank your for your feedback',
            this.state.text,
            [
                {text: 'OK', onPress: () => this.props.navigator.pop()}
            ]
        )
    }
    
    onChangeText(text) {
        this.setState({    
            text: text
        })
    }
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
        flexGrow: 1
    }
})