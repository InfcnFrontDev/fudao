import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";
import {Left, Right, Body, Grid, Row, Col, Icon, Text, View} from "native-base";
import styles from "./styles";
import {search} from "../../actions/search";
/**
 * category
 */
class Category extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			rows: [
				{
					cols: [
						{
							icon: 'medkit',
							text: '症状和问题',
							category: 'SymptomProblem',
						},
						{
							icon: 'pizza',
							text: '保健方法',
							category: 'HealthCare',
						},
						{
							icon: 'cart',
							text: '线下服务',
							category: 'OfflineService',
						}
					]
				},
				{
					cols: [
						{
							icon: 'bicycle',
							text: '日常生活',
							category: 'DailyLife',
						},
						{
							icon: 'images',
							text: '资讯',
							category: 'Information',
						},
						{
							icon: 'aperture',
							text: '圈子',
							category: 'FriendsCircle',
						}
					]
				}
			]
		};
	}

	render() {
		return (
			<Grid style={styles.grid}>
				{this.state.rows.map((row, i) => this.renderRow(row, i))}
			</Grid>
		);
	}

	renderRow(row, i) {
		return (
			<Row key={i} style={styles.row}>
				{row.cols.map((col) => this.renderCol(col))}
			</Row>
		)
	}

	renderCol(col) {
		return (
			<Col key={col.category} style={styles.col}>
				<TouchableOpacity onPress={() => this.categorySearch(col.category)}>
					<View style={styles.iconContainer}>
						<Icon name={col.icon} style={styles.icon}/>
						<Text numberOfLines={1} style={styles.iconText}>{col.text}</Text>
					</View>
				</TouchableOpacity>
			</Col>
		)
	}

	categorySearch(category) {
		Actions['search' + category]();
	}
}

const mapStateToProps = state => ({
	search: state.search,
});
export default connect(mapStateToProps)(Category);