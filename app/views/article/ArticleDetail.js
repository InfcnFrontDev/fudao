import React, {Component} from "react";
import {WebView, Dimensions} from "react-native";
import {connect} from "react-redux";
import {Container, Left, Right, Body, Form, Item} from "native-base";
import Header from "../../components/header/BaseHeader";


const {width, height} = Dimensions.get('window');

const url = "http://www.ximalaya.com/explore/";

const html = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Hello Static World</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
      }
      h1 {
        padding: 45px;
        margin: 0;
        text-align: center;
        color: #33f;
      }
    </style>
  </head>
  <body>
    <h1>Hello Static World</h1>
    <img class="img-responsive" src="http://reactnative.cn/static/docs/0.41/img/components/webview.png" alt="" onclick="goBack()">
    <script>
        function goBack(){
            window.postMessage('yangkk');
        }
    </script>
  </body>
</html>
`;

/**
 * 资讯细览
 */
class ArticleDetail extends Component {

	render() {
		return (
			<Container>
				<Header {...this.props}/>
				<WebView
					style={{flex:1}}
					source={{html:html,method: 'GET'}}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					scalesPageToFit={false}
					onMessage={(event)=> alert(event.nativeEvent.data)}
				/>
			</Container>
		)
	}
}
const styles = {};
const mapStateToProps = state => ({});
export default connect(mapStateToProps)(ArticleDetail);