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

export default class CommentView extends Component{
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    
    componentWillMount() {
        this.props.route.sendComment = this.sendComment.bind(this)
    }

    render() {
        return (
            <View style={[styles.container, globalStyles.containerShadow]}>
                <NavBar route={this.props.route} navigator={this.props.navigator}/>
                <Editor
                    enableTools={'emotion, at'}
                    onChangeText={this.onChangeText.bind(this)} 
                    placeholder={'Write a comment'}
                    text={this.state.text}/>    
            </View> 
        )
    }
    
    sendComment() {
        Alert.alert(
            'Sent successfully',
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