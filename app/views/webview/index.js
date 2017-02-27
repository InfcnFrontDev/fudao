import React, {PureComponent} from "react";
import {WebView} from "react-native";
import {Container} from "native-base";
import Header from "../../components/header/base";
import Error from "./error";

class Webview extends PureComponent {

    render() {
        let {uri, html} = this.props;
        return (
            <Container>
                <Header {...this.props}/>
                <WebView
                    ref="webview"
                    source={{...this.props}}
                    startInLoadingState={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                    renderError={()=> <Error/>}
                />
            </Container>
        );
    }

}
export default (Webview);