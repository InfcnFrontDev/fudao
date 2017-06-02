import React, {PureComponent} from "react";
import {View, Image, TouchableHighlight, TextInput, ScrollView, TouchableOpacity, ListView,Slider} from "react-native";
import {Text, Button, ListItem, CheckBox} from "native-base";
import {Modal} from "../../../components/index";
/**
 * 影响情绪因素， 弹出
 */


export default class EmotionFactorModal extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			emotion: null,
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			selectedGradeIndex: 0,
			selectedGradeName: '一级',
			selectedReasons: [],
		};
	}

	render() {
		let {visible, emotion} = this.state;
		let maxVal;
		if(emotion){
			if(emotion.grade.length==3){
				maxVal=2;
			}else if(emotion.grade.length==2){
				maxVal=1;
			}

		}
		return (
			<Modal ref={(e)=>this._modal = e} visible={visible}>
				{emotion != null && <ScrollView>
					<View style={styles.container}>
						<View style={styles.View}>
							<View style={{flexDirection:'row'}}>
								<Text style={styles.title}>您有受以下因素影响吗？</Text>
							</View>
							<Image source={require('../../../assets/emotion/wuyun.png')} style={styles.wuyunBox}
								   resizeMode="contain">
								<View style={styles.box}>
									{emotion.macroscopic.map((item, index) => this.renderMacroscopic(item, index))}
								</View>
							</Image>
							<View style={styles.emotion}>
								<Image source={emotion.img} style={styles.itemImg}/>
								<Text style={styles.itemText}>{emotion.title}</Text>
							</View>

							<View style={{justifyContent: 'center', alignItems: 'center'}}>
								{emotion.grade.length > 1 && <View style={styles.slideBox}>
									<View style={{width:theme.deviceWidth*0.6,justifyContent: 'center'}}>
										<View style={{flexDirection:'row',justifyContent:'space-between'}}>
											{emotion.grade.map((item,index)=>{
												return(
													<Text style={{fontSize:theme.DefaultFontSize-2}} key={index}>{item.title}</Text>
												)
											})}
										</View>
										<Slider
											maximumValue={maxVal}
											minimumValue={0}
											step={1}
											value={0}
											onSlidingComplete={(value) => {this._grade_Change(value,emotion.grade)}}
										/>
									</View>
								</View>}
							</View>

							<View style={{marginTop:10,flexDirection:'row'}}>
								<Text style={{fontWeight:'bold'}}>请选择其他影响您</Text>
								<Text style={{fontWeight:'bold'}}>{emotion.title}</Text>
								<Text style={{fontWeight:'bold'}}>的原因：</Text>
							</View>
							<ListView
								renderScrollComponent={props => <ScrollView {...props} showsVerticalScrollIndicator={true}/>}
								dataSource={this.state.dataSource.cloneWithRows(emotion.reasons.slice(0))}
								renderRow={this.renderReasonRow.bind(this)}
								enableEmptySections
								style={{height: 120}}
							/>
							<View style={{alignItems:'center'}}>
								<View style={styles.input}>
									<TextInput underlineColorAndroid="transparent" placeholder="请输入您的原因"
											   onChangeText={(value)=>{this.selfReason=value}}/>
								</View>
							</View>
							<View style={{alignItems:'center',justifyContent:'center'}}>
								<View>
									<Button style={{marginTop:10,height:30}} onPress={()=>this.submit()}>
										<Text>帮您缓解</Text>
									</Button>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>}
			</Modal>
		)
	}


	renderMacroscopic(item, index) {
		return (
			<View key={index} style={styles.hongGuanBox}>
				<Image source={{uri:urls.getImage(item.img)}} style={styles.hongGuanImg}/>
				<Text style={styles.itemText}>{item.name}</Text>
			</View>
		)
	}

	renderReasonRow(rowData) {
		let {selectedReasons} = this.state;
		let checked = _.findIndex(selectedReasons, (item) => item == rowData) >= 0;
		return (
			<ListItem
				key={rowData}
				style={{padding:5,borderColor:'transparent'}}
				onPress={()=>{this._reason_onClick(rowData)}}
			>
				<CheckBox
					checked={checked}
					onPress={()=>{this._reason_onClick(rowData)}}
					style={{marginRight:10,borderColor:'#AFAFAF'}}/>
				<Text style={{color:"#2F2F2F"}}>{rowData}</Text>
			</ListItem>
		)
	}

	_reason_onClick(rowData) {
		let {selectedReasons} = this.state;
		let index = _.findIndex(selectedReasons, (item) => item == rowData);
		if (index >= 0) {
			selectedReasons.splice(index, 1);
		} else {
			selectedReasons.push(rowData)
		}
		this.setState({
			selectedReasons: [...selectedReasons]
		})
	}

	_grade_Change(value,grade) {
		if(grade.length==3){
			if(value==1){
				this.setState({selectedGradeName:"二级"})
			}else if(value==0){
				this.setState({selectedGradeName:"一级"})
			}else{
				this.setState({selectedGradeName:"三级"})
			}
		}else if(grade.length==2){
			if(value==1){
				this.setState({selectedGradeName:"二级"})
			}else{
				this.setState({selectedGradeName:"一级"})
			}
		}

	}

	show(emotion) {
		this.setState({
			visible: true,
			emotion,
			selectedGradeIndex: 0,
			selectedGradeName: '一级',
			selectedReasons: [],
		})
	}

	hide() {
		this.setState({
			visible: false,
		})
	}

	submit() {
		let {emotion, selectedGradeName, selectedReasons} = this.state;
		let {onSubmit} = this.props;

		this.hide();

		if (onSubmit)
			onSubmit(emotion, selectedGradeName, selectedReasons)
	}
}

const styles = {
	container: {
		flex: 1,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 10,
		paddingLeft: 10
	},
	View: {
		flex: 1,
		flexDirection: 'column',
	},
	title: {
		fontSize: theme.DefaultFontSize,
		fontWeight:'bold'
	},
	wuyunBox: {
		width: theme.deviceWidth * 0.82,
		height: 170,
		paddingLeft: 35,
		paddingRight: 35,
	},
	box: {
		marginLeft: 10,
		marginTop: 42,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	itemText: {
		fontSize: theme.DefaultFontSize - 4,
		textAlign:'center'
	},
	hongGuanBox: {
		width:50,
		alignItems: 'center',
	},
	hongGuanImg: {
		width: 40,
		height: 40,
	},
	itemImg: {
		width: 50,
		height: 50
	},
	emotion: {
		marginTop: -40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	slideBox: {
		width: theme.deviceWidth * 0.8,
		height: 49,
		borderRadius: 20,
		backgroundColor: "#EFEFEF",
		padding:2,
		marginTop:2,
		justifyContent:'center',
		alignItems:'center'
	},
	slideItem: {
		flex: 1,
	},
	slideText: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	sliderColor: {
		marginRight: 5,
		width: 80,
		height: 8,
	},
	sliderBlue: {
		marginRight: 5,
		width: 80,
		height: 8,
		backgroundColor: '#008F81'
	},
	content: {
		textAlign: 'center',
		fontSize: theme.DefaultFontSize + 2,
		marginLeft: 30,
		marginRight: 30,
		lineHeight: 28,
	},
	input: {
		width: theme.deviceWidth * 0.8,
		height: 40,
		borderWidth: 1,
		borderColor: '#666',
		padding: 0,

	}
};

