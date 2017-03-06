import React, {PureComponent} from "react";
import {StyleSheet, ScrollView, Text, RefreshControl} from "react-native";

export default class Loading extends PureComponent {

	state = {
		isRefreshing: false
	}

	render() {
		let {isRefreshing} =  this.state;
		let {children} = this.props;
		return (
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={isRefreshing}
						onRefresh={this._onRefresh.bind(this)}
						colors={['rgb(217, 51, 58)', '#000000', 'rgb(0, 51, 58)']}
					/>
				}
			>
				{children}
			</ScrollView>
		)
	}

	_onRefresh() {
		this.setState({
			isRefreshing: true
		});

		let {onPullRelease} = this.props;
		if (onPullRelease) {
			onPullRelease(this.resolve.bind(this));
		} else {
			this.resolve();
		}
	}

	resolve() {
		this.setState({
			isRefreshing: false
		})
	}


}

const styles = StyleSheet.create({})