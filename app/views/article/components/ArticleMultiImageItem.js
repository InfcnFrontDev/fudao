import React, {Component} from "react";
import {Left, Right, Body, Grid, Item, Text, Row, Col, Thumbnail} from "native-base";

class ArticleMultiImageItem extends Component {

	render() {
		let {data} = this.props;
		return (
			<Item style={{margin: 10, marginBottom: 0}}>
				<Grid>
					<Row>
						<Text style={styles.title}>{data.text}</Text>
					</Row>
					<Row>
						<Col>
							<Thumbnail square source={require('../../../../img/web-cover1.jpg')}
									   style={{width: 110, height: 70}}/>
						</Col>
						<Col>
							<Thumbnail square source={require('../../../../img/web-cover1.jpg')}
									   style={{width: 110, height: 70}}/>
						</Col>
						<Col>
							<Thumbnail square source={require('../../../../img/web-cover1.jpg')}
									   style={{width: 110, height: 70}}/>
						</Col>
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
export default (ArticleMultiImageItem);