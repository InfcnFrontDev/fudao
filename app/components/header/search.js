import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {Actions} from "react-native-router-flux";
import {Header, Icon, Left, Right, Body, Form, Input, Item, Button, Grid, Row, Col} from "native-base";
import styles from "./styles";

class SearchHeader extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

	render() {
		let {placeholder, autoFocus} = this.props,
			{text} = this.state,
			clearIcon = null;

		if (text.length > 0) {
			clearIcon = (
				<Icon name="close" style={styles.search.inputIcon} onPress={() => this.changeText('')}/>
			);
		}

		return (
			<Header>
				<Grid>
					<Row>
						<Col style={styles.search.backCol}>
							<Button transparent onPress={() => Actions.pop()} style={styles.search.backButton}>
								<Icon name="arrow-back"/>
							</Button>
						</Col>
						<Col style={styles.search.inputCol}>
							<Item rounded style={styles.search.inputGroup}>
								<Icon name="search" style={styles.search.inputIcon}/>
								<Input
									placeholder={placeholder}
									onChangeText={(text) => this.changeText(text)}
									value={text}
									autoFocus={autoFocus}
									onSubmitEditing={(text) => this.submitEditing(text)}
									style={styles.search.inputText}/>
								{clearIcon}
							</Item>
						</Col>
					</Row>
				</Grid>
			</Header>
		)
	}

	changeText(text) {
		this.setState({text});
		if (text == '') {
			this.submitEditing(text);
		}

	}

	submitEditing(text) {
		let {onSearch} = this.props;
		if (onSearch) {
			onSearch(text);
		}
	}


}

SearchHeader.propsType = {
	placeholder: React.PropTypes.string,
	onSearch: React.PropTypes.func,
	autoFocus: React.PropTypes.bool,
};
SearchHeader.defaultProps = {
	placeholder: '搜索',
	autoFocus: false,
};


export default (SearchHeader)