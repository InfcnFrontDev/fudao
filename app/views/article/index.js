import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Title, Left, Right, Body, Form, Item} from "native-base";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import Header from "../../components/header/";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import TabList from "./tab-list";
import styles from "./styles";

/**
 * 资讯
 */
class Article extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container>
				<Header>
					<Title>{this.props.title}</Title>
				</Header>

				<ScrollableTabView
					style={styles.tabView}
					renderTabBar={() => <ScrollableTabBar />}
					locked={true}
				>
					<TabList tabLabel='推荐'/>
					<TabList tabLabel='热点'/>
					<TabList tabLabel='社会'/>
					<TabList tabLabel='娱乐'/>
					<TabList tabLabel='问答'/>
					<TabList tabLabel='图片'/>
					<TabList tabLabel='科技'/>
					<TabList tabLabel='汽车'/>
					<TabList tabLabel='体育'/>
					<TabList tabLabel='财经'/>
				</ScrollableTabView>
			</Container>
		)
	}
}
function bindAction(dispatch) {
	return {
		openDrawer: () => dispatch(openDrawer()),
		closeDrawer: key => dispatch(closeDrawer()),
	};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Article);