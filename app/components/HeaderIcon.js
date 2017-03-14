import React, {PureComponent} from "react";
import {Button, Icon} from "native-base";

/**
 * header icon
 */
class HeaderIcon extends PureComponent {

	render() {
		let {name, onPress} = this.props;
		return (
			<Button transparent onPress={onPress} style={{paddingLeft: 6, paddingRight: 6}}>
				<Icon name={name} style={{color: '#FFFFFF'}}/>
			</Button>
		)
	}
}


HeaderIcon.propTypes = {
	iconName: React.PropTypes.string,
	onPress: React.PropTypes.func,
}

HeaderIcon.defaultProps = {
	name: 'add',
	onPress: () => {
	}
}

export default (HeaderIcon)
