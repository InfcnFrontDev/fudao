import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Header, Icon, Left, Right, Body, Form, Input, Item, Button, Grid, Row, Col, Text} from "native-base";
import styles from "./styles";

class SearchHeader extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

	render() {
		let {placeholder} = this.props,
			{text} = this.state,
			clearIcon = null;

		if (text.length > 0) {
			clearIcon = (
				<Icon name="close" style={styles.search.inputIcon} onPress={() => this.setState({text: ''})}/>
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
									onChangeText={(text) => this.onChangeText(text)}
									value={text}
									style={styles.search.inputText}/>
								{clearIcon}
							</Item>
						</Col>
					</Row>
				</Grid>
			</Header>
		)
	}

	onChangeText(text) {
		let {onSearch} = this.props;

		this.setState({text});

		if (onSearch) {
			onSearch(text);
		}
	}
}

SearchHeader.propsType = {
	placeholder: React.PropTypes.string,
	onSearch: React.PropTypes.func,
};
SearchHeader.defaultProps = {
	placeholder: '搜索',
};

function bindAction(dispatch) {
	return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(SearchHeader)