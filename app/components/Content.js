import React, {PureComponent} from "react";
import {StyleSheet, ScrollView, View} from "react-native";
import Loading from "./Loading";
import {theme, tools} from "../utils/index";

export default class Content extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: props.delay
		}
	}

	render() {
		let {isLoading} = this.state;
		let {children, gray, padder} = this.props;
		let contentStyle = {flex: 1};

		if (gray) {
			contentStyle.backgroundColor = theme.contentBgColor;
		}
		if (padder) {
			contentStyle.padding = 15;
		}

		return (
			<View style={contentStyle}>
				<Loading isShow={isLoading}/>
				{!isLoading && children}
			</View>
		)
	}

	componentDidMount() {
		let {delay} = this.props;
		if (delay) {
			tools.delayLoad(() => {
				this.setState({
					isLoading: false
				})
			})
		}
	}
}

Content.propTypes = {
	gray: React.PropTypes.bool, // 背景灰色
	padder: React.PropTypes.bool, // 加Padding
	delay: React.PropTypes.bool, // 延迟加载
}

Content.defaultProps = {
	gray: false,
	padder: false,
	delay: false,
}
