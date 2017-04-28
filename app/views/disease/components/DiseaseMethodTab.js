import React, {PureComponent} from "react";
import {ScrollView, View, Image, ListView, TouchableOpacity} from "react-native";
import {Text} from "native-base";
import RelatedProductsAndServices from "./RelatedProductsAndServices";

export default class DiseaseMethodTab extends PureComponent {

	static propsTypes = {
		data: React.PropTypes.object,
	}
	static defaultProps = {
		data: {},
	}

	render() {
		let {data} = this.props;
		return (
			<ScrollView>
				{data.type == '饮食' ? this.renderPrinciple0(data) : this.renderPrinciple1(data)}
				{data.type == '饮食' ? this.renderMethod0(data.methods) : this.renderMethod1(data.methods)}
				<RelatedProductsAndServices/>
			</ScrollView>
		)
	}

	renderPrinciple0(data) {
		return (
			<View style={styles.principle}>
				<Text style={styles.text}>{'        宜食：' + data.suitable + '忌食：' + data.fasting}</Text>
			</View>
		)
	}

	renderPrinciple1(data) {
		return (
			<View style={styles.principle}>
				<Text style={styles.text}>{'        ' + data.principle}</Text>
			</View>
		)
	}


	renderMethod0(methods) {
		return (
			<View style={styles.methods}>
				{methods.map((method) => (
					<View style={styles.method} key={method.timePeriod}>
						<Text style={styles.text}>{' - ' + method.timePeriod + ' : '}</Text>
						<View style={{flexDirection:'column'}}>
							<View style={{flexDirection:'row'}}>
								<Text style={styles.text}>{'宜食 '}</Text>
								{method.suitable.map((text) =>
									<TouchableOpacity key={text} onPress={()=>alert('')}>
										<Text style={styles.textLink}>{text + '; '}</Text>
									</TouchableOpacity>)}
							</View>
							{
								method.fasting &&
								<View style={{flexDirection:'row'}}>
									<Text style={styles.text}>{'忌食 '}</Text>
									{method.fasting.map((text) =>
										<Text key={text} style={styles.text}>{text + '; '}</Text>)}
								</View>
							}
						</View>
					</View>
				))}
			</View>
		)
	}

	renderMethod1(methods) {
		return (
			<View style={styles.methods}>
				{methods.map((method) => (
					<View style={styles.method} key={method.timePeriod}>
						<Text style={styles.text}>{ ' - ' + method.timePeriod + ' : '}</Text>
						<TouchableOpacity onPress={()=>alert('')}>
							<Text style={styles.textLink}>{ method.name}</Text>
						</TouchableOpacity>
					</View>
				))}
			</View>
		)
	}

}

const styles = {
	principle: {
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 10,
		paddingRight: 10,
	},
	methods: {
		paddingLeft: 10,
		paddingRight: 10,
	},
	method: {
		paddingLeft: 20,
		paddingTop: 3,
		paddingBottom: 3,
		flexDirection: 'row',
	},
	text: {
		fontSize: theme.fontSizeH5
	},
	textLink: {
		fontSize: theme.fontSizeH5,
		color: '#9FCD2D'
	}
};