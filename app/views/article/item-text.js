import React, {Component} from "react";
import {Left, Right, Body, Grid, Item, Text, Row} from "native-base";
import styles from "./styles";

class ItemText extends Component {

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

export default (ItemText);