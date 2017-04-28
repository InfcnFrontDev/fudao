import React, {PureComponent} from "react";
import {StyleSheet, ScrollView, View} from "react-native";
import Loading from "./Loading";

export default class Content extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: props.delay
		}
	}

	render() {
		let {isLoading} = this.state;
		let {children, gray, white, padder} = this.props;
		let contentStyle = {flex: 1};

		if (gray) {
			contentStyle.backgroundColor = theme.contentBgColor;
		} else if (white) {
			contentStyle.backgroundColor = '#FFFFFF';
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
		let {isLoading} = this.state;
		if (isLoading) {
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
	white: React.PropTypes.bool, // 背景白色
	padder: React.PropTypes.bool, // 加Padding
	delay: React.PropTypes.bool, // 延迟加载
}

Content.defaultProps = {
	gray: false,
	white: false,
	padder: false,
	delay: false,
}
