import React, {Component} from "react";
import {Left, Right, Body, Grid, Item, Text, Row, Col, Thumbnail} from "native-base";
import {urls} from "../../../utils/index";

class ArticleSingleImageItem extends Component {

	render() {
		let {article, onPress} = this.props;
		return (
			<Item style={styles.item} onPress={()=> onPress && onPress(article)}>
				<Grid>
					<Row>
						<Col>
							<Row>
								<Text style={styles.title}>{article.title}</Text>
							</Row>
							<Row style={{height:30}}>
								<Text style={styles.from}>来自：{article.source}</Text>
								<Text style={styles.timeDiff}>{article.updatetime}</Text>
							</Row>
						</Col>
						<Col style={{width: 115, justifyContent: 'flex-end', flexDirection: 'row'}}>
							<Thumbnail square source={{uri: urls.apis.IMAGE + '?filePath=' + article.img}}
									   style={{width: 110, height: 70}}/>
						</Col>
					</Row>
				</Grid>
			</Item>
		)
	}
}
const styles = {
	item: {
		margin: 5,
		padding: 5,
		height: 90,
	},
	title: {
		fontSize: 14,
	},
	from: {
		fontSize: 12,
		color: '#AAAAAA'
	},
	timeDiff: {
		fontSize: 12,
		color: '#AAAAAA',
		marginLeft: 15
	}
};

ArticleSingleImageItem.propTypes = {
	article: React.PropTypes.object,
	onPress: React.PropTypes.func,
}

export default (ArticleSingleImageItem);