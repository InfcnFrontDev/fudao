import React, {PureComponent} from "react";
import {StyleSheet, View} from "react-native";
import {connect} from "react-redux";
import Loading from "./Loading";
import {hideLoading} from "../actions/loading";

class Container extends PureComponent {

	render() {
		let {children, isLoading, text} = this.props;
		return (
			<View style={styles.container}>
				{children}
				<Loading isShow={isLoading} text={text}/>
			</View>
		)
	}

	componentDidMount() {
		this.props.dispatch(hideLoading());
	}

}


const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
const mapStateToProps = state => ({
	...state.loadingStore,
});
export default connect(mapStateToProps)(Container)