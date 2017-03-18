import React, {Component} from "react";
import {View,} from "react-native";
import {ListItem, Text, Button,List} from "native-base";

class MyRecordeListRow extends Component {

	render() {
		return (
			<View style={this.props.type=='day'?styles.myRecordeListRow:[styles.myRecordeListRow,styles.Month]}>
				<View style={styles.twoLine}>
					<Text style={styles.color000}>休息</Text>
					<Text style={styles.color000}>9 : 20 am</Text>
				</View>
				<View style={this.props.type=='day'?{ maxWidth:100 }:{ maxWidth:200 }}>
					{this.renderList()}
				</View>
			</View>
		)
	}

	renderList(){
		if(this.props.type!='day'){
			var items=[1,2,3,4,5]
			return (
				<List dataArray={items} renderRow={(data) =>
					<ListItem style={styles.listItem}>
						<Text style={styles.colorA4}>大米 大米 大米 大米{data}</Text>
					</ListItem>
				} />
			)
		}
		return (
			<Text style={styles.colorA4}>大米 大米 大米 大米</Text>
		)
	}
}

const styles={
		myRecordeListRow:{
			backgroundColor:'#fff',
			margin:20,
			marginTop:10,
			marginBottom:0,
			borderRadius:10,
			padding:16,
			flexDirection:'row',
			alignItems:'center',
		},
		myRecordeListRowMonth:{
			alignItems:'flex-start',
		},
		color000:{
			color:'#000',
		},
		colorA4:{
			color:'#A4A4A4',
			textAlign:'center',
		},
		twoLine:{
			flex:1,
		},
		listItem:{
			padding:0,
			margin:0,
			borderColor:'transparent'
		}
}

export default (MyRecordeListRow);
