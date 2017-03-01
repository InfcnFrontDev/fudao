import React, {Component} from "react";
import {Left, Right, Body, Grid, Item, Text, Row} from "native-base";

class TextItem extends Component {

	render() {
		let {data} = this.props;
		return (
			<Item style={{margin: 10}}>
				<Grid>
					<Row>
						<Text style={styles.title}>{data.text}</Text>
					</Row>
					<Row>
						<Text>{1}</Text>
						<Text>{2}</Text>
						<Text>{3}</Text>
					</Row>
				</Grid>
			</Item>
		)
	}
}
const styles = {
	tabView: {
		flex: 1,
	},
	tabPanel: {
		flex: 1,
		flexGrow: 1,
	},
	title: {
		fontSize: 16
	},
	from: {
		fontSize: 12,
		color: '#888888'
	},
	timeDiff: {
		fontSize: 12,
		color: '#888888',
		marginLeft: 15
	}
};
export default (TextItem);