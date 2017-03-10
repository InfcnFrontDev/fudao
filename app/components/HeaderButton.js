import React, {PureComponent} from "react";
import {Button, Text} from "native-base";

class HeaderButton extends PureComponent {

	render() {
		let {text, onPress} = this.props;
		return (
			<Button small block style={styles.button} onPress={onPress}>
				<Text>{text}</Text>
			</Button>
		)
	}
}

const styles = {
	button: {
		paddingLeft: 15,
		paddingRight: 15,
	}
}


HeaderButton.propTypes = {
	text: React.PropTypes.string,
	onPress: React.PropTypes.func,
}

HeaderButton.defaultProps = {
	text: '按钮',
	onPress: () => {
	}
}

export default (HeaderButton)
