import React, {Component} from "react";
import {Left, Right, Body, Grid, Item, Text, Row, Col, Thumbnail} from "native-base";
import styles from "./styles";

class ItemMultiPicture extends Component {

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
							<Thumbnail square source={require('../../../img/web-cover1.jpg')}
									   style={{width: 110, height: 70}}/>
						</Col>
						<Col>
							<Thumbnail square source={require('../../../img/web-cover1.jpg')}
									   style={{width: 110, height: 70}}/>
						</Col>
						<Col>
							<Thumbnail square source={require('../../../img/web-cover1.jpg')}
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

export default (ItemMultiPicture);