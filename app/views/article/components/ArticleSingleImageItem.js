import React, {Component} from "react";
import {Actions} from "react-native-router-flux";
import {Left, Right, Body, Grid, Item, Text, Row, Col, Thumbnail} from "native-base";

class ArticleSingleImageItem extends Component {

	render() {
		let {data} = this.props;
		return (
			<Item style={{marginLeft: 10, marginRight: 10, paddingTop: 10, paddingBottom: 10}}
				  onPress={()=> this._onPress(data)}
			>
				<Grid>
					<Row>
						<Col>
							<Row>
								<Text style={styles.title}>{data.text}</Text>
							</Row>
							<Row>
								<Text style={styles.from}>来自：养生堂</Text>
								<Text style={styles.timeDiff}>15分钟前</Text>
							</Row>
						</Col>
						<Col style={{width: 115, justifyContent: 'flex-end', flexDirection: 'row'}}>
							<Thumbnail square source={require('../../../../img/web-cover1.jpg')}
									   style={{width: 110, height: 70}}/>
						</Col>
					</Row>
				</Grid>
			</Item>
		)
	}

	_onPress(data) {
		Actions.articleDetail(data);
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
export default (ArticleSingleImageItem);