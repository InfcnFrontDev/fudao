import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Title, Left, Right, Body, Form, Item} from "native-base";
import Header from "../../components/header/IndexHeader";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import ArticleList from "./components/ArticleList";


const LABELS = ['健康饮食', '健康常识', '疾病偏方', '疾病预防', '美容美体', '养生方法'];

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
					renderTabBar={() => <ScrollableTabBar/>}
					tabBarPosition='top'
					style={styles.tabView}
				>
					{LABELS.map((label) => <ArticleList key={label} tabLabel={label} label={label}/>)}
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