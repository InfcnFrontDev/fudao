import React, {PureComponent} from "react";
import {Button, Icon} from "native-base";

/**
 * header icon
 */
class HeaderIcon extends PureComponent {

	render() {
		let {iconName, onPress} = this.props;
		return (
			<Button transparent onPress={onPress}>
				<Icon name={iconName} style={{fontSize: 26}}/>
			</Button>
		)
	}
}


HeaderIcon.propTypes = {
	iconName: React.PropTypes.string,
	onPress: React.PropTypes.func,
}

HeaderIcon.defaultProps = {
	iconName: 'add',
	onPress: () => {
	}
}

export default (HeaderIcon)
