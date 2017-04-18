import React, {PureComponent} from "react";
import {Actions} from "react-native-router-flux";
import {Right, Button, Icon} from "native-base";
import {Container, Header, HeaderIcon} from "../../components/index";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import ArticleList from "./components/ArticleList";
import {request, urls,theme,toast} from "../../utils/";


const LABELS = ['健康饮食', '健康常识', '疾病偏方', '疾病预防', '美容美体', '养生方法'];


/**
 * 资讯
 */
class Article extends PureComponent {
	constructor(props) {
		super(props);
		this.state={
			LABELS1:null,
		}

	}
	componentWillMount(){
		request.getJson(urls.apis.ARTICLE_GETARTICLECOLUMNLIST).then(((result) => {
			//toast.show(JSON.stringify(result));
			this.setState({
				LABELS1:result
			})
		}), (error) => {
			dispatch(hideLoading());
			alert(JSON.stringify(error));
		});
	}


	render() {

		let {LABELS1}=this.state;
		if(LABELS1){
			return (
				<Container>
					<Header menu {...this.props}/>

					<ScrollableTabView
						renderTabBar={() => (
							<ScrollableTabBar
								activeTextColor={theme.navTabBarActiveTextColor}
								underlineStyle={{backgroundColor: theme.navTabBarActiveTextColor}}
							/>
						)}
						tabBarPosition='top'
						scrollWithoutAnimation={false}
						style={styles.tabView}
					>
						{LABELS1.obj.map((label) =><ArticleList key={label.id} tabLabel={label.name} label={label.id}/>)}
					</ScrollableTabView>
				</Container>
			)
		}else{
			return (
				<Container>
					<Header menu {...this.props}/>
				</Container>
			)
		}

	}

}
const styles = {
	tabView: {
		flex: 1,
		flexGrow: 1,
	},
};

export default (Article);