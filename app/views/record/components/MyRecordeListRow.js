import React, {Component} from "react";
import {View} from "react-native";
import {ListItem, Text, List} from "native-base";

export default class MyRecordeListRow extends Component {

	render() {
		return (
			<View style={this.props.type=='day'?styles.myRecordeListRow:[styles.myRecordeListRow,styles.Month]}>
				<View style={styles.twoLine}>
					<Text style={styles.color000}>{this.props.row.name}</Text>
					<Text style={styles.color000}>{this.props.row.time}</Text>
				</View>
				<View style={this.props.type=='day'?{ width:100 }:{ width:200 }}>
					{this.renderList()}
				</View>
			</View>
		)
	}

	renderList() {
		if (this.props.type != 'day') {
			return (
				<List dataArray={this.props.row.content} renderRow={(data) =>
					<ListItem style={styles.listItem}>
						<Text style={{color:'#A4A4A4'}}>{data.time}  {data.content}</Text>
					</ListItem>
				}/>
			)
		}
		return (
			<Text style={styles.colorA4}>{this.props.row.content}</Text>
		)
	}
}

const styles = {
	myRecordeListRow: {
		backgroundColor: '#fff',
		margin: 20,
		marginTop: 10,
		marginBottom: 0,
		borderRadius: 10,
		padding: 16,
		flexDirection: 'row',
		alignItems: 'center',
	},
	myRecordeListRowMonth: {
		alignItems: 'flex-start',
	},
	color000: {
		color: '#000',
	},
	colorA4: {
		color: '#A4A4A4',
		textAlign: 'center',
	},
	twoLine: {
		flex: 1,
	},
	listItem: {
		padding: 0,
		margin: 0,
		borderColor: 'transparent'
	}
}
