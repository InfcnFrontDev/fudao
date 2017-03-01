import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Title, Left, Right, Body, Form, Item} from "native-base";
import Header from "../../components/header/IndexHeader";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import TabList from "./components/TabList";
import ArticleList from "./components/ArticleList";
import FeedsCategoryBar from "./components/FeedsCategoryBar"


const titles = ['推荐', '热点', '社会', '图片', '科技', '汽车', '体育', '财经'];

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
					renderTabBar={() => <ScrollableTabBar/>}
					tabBarPosition='top'
					scrollWithoutAnimation={false}
					onChangeTab={(obj)=> {
						console.log(obj);
						return false;
					}}
				>
					{titles.map((title)=> <TabList key={title} tabLabel={title}/>)}
				</ScrollableTabView>
			</Container>
		)
	}
}
const styles = {
	tabView: {
		flex: 1,
	},
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Article);