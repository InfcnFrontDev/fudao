import React, { 
    Component     
} from 'react'

import {
    StyleSheet,
    View
} from 'react-native'

import TabBar from '../components/TabBar'
import NavBar from '../components/NavBar'

export default class IndexView extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <TabBar/>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
})
