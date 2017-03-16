import React, {PureComponent} from "react";
import {Left, Right, Body, ListItem, Text, Icon} from "native-base";


class ListItem extends PureComponent {

	render() {
		let {data} = this.props;
		return (
			<ListItem icon onPress={()=>this.onPressItem()}>
				<Body>
				<Text>{data.text}</Text>
				</Body>
				<Right>
					<Text note>{data.note}</Text>
					<Icon active name="ios-arrow-forward"/>
				</Right>
			</ListItem>
		)
	}
}

ListItem.propTypes = {
	data: React.PropTypes.object,
};

ListItem.defaultProps = {
	data: null,
};

export default (ListItem);