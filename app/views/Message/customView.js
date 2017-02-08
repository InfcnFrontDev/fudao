import React from 'react'
import {
    Linking,
    MapView,
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'

export default class CustomView extends React.Component {
    render() {
        if (this.props.currentMessage.group) {
            return (
                <TouchableOpacity style={[styles.container, this.props.containerStyle]} onPress={() => {
                    const url = Platform.select({
                        ios: `http://maps.apple.com/?ll=${this.props.currentMessage.group.latitude},${this.props.currentMessage.group.longitude}`,
                        android: `http://maps.google.com/?q=${this.props.currentMessage.group.latitude},${this.props.currentMessage.group.longitude}`
                    })
                    Linking.canOpenURL(url).then(supported => {
                        if (supported) {
                            return Linking.openURL(url)
                        }
                    }).catch(err => {
                        console.error('An error occurred', err)
                    })
                } }>
                    <MapView
                        style={[styles.mapView, this.props.mapViewStyle]}
                        region={{
                            latitude: this.props.currentMessage.group.latitude,
                            longitude: this.props.currentMessage.group.longitude,
                        }}
                        annotations={[{
                            latitude: this.props.currentMessage.group.latitude,
                            longitude: this.props.currentMessage.group.longitude,
                        }]}
                        scrollEnabled={false}
                        zoomEnabled={false}
                        />
                </TouchableOpacity>
            )
        }
        return null
    }
}

const styles = StyleSheet.create({
    container: {
    },
    mapView: {
        width: 150,
        height: 100,
        borderRadius: 13,
        margin: 3,
    },
})

CustomView.defaultProps = {
    currentMessage: {},
    containerStyle: {},
    mapViewStyle: {},
}

CustomView.propTypes = {
    currentMessage: React.PropTypes.object,
    containerStyle: View.propTypes.style,
    mapViewStyle: View.propTypes.style,
}