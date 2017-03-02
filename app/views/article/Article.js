import React, {PureComponent} from "react";
import {Container, Title, Left, Right, Body} from "native-base";
import Header from "../../components/header/IndexHeader";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import ArticleList from "./components/ArticleList";
import {theme} from "../../utils/";


const LABELS = ['健康饮食', '健康常识', '疾病偏方', '疾病预防', '美容美体', '养生方法'];

/**
 * 资讯
 */
class Article extends PureComponent {

	render() {
		return (
			<Container>
				<Header>
					<Title>{this.props.title}</Title>
				</Header>

				<ScrollableTabView
					renderTabBar={() => (
						<ScrollableTabBar
							activeTextColor={theme.navTabBarActiveTextColor}
							underlineStyle={{backgroundColor:theme.navTabBarActiveTextColor}}
						/>
					)}
					tabBarPosition='top'
					scrollWithoutAnimation={false}
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
		flexGrow: 1,
	},
};

export default (Article);