import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {Actions} from "react-native-router-flux";
import {Grid, Row, Col, Icon, Text, View} from "native-base";
/**
 * category
 */
export default class Category extends PureComponent {

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
							icon: 'images',
							text: '资讯',
							category: 'Information',
						},
					]
				},
				{
					cols: [
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

const styles = {
	grid: {
		marginTop: 60,
		marginLeft: 30,
		marginRight: 30,
	},
	row: {
		paddingBottom: 20,
	},
	iconContainer: {
		alignItems: 'center',
	},
	icon: {
		fontSize: 32,
		color: '#6c6c6c'
	},
	iconText: {
		color: "#6c6c6c"
	},
};