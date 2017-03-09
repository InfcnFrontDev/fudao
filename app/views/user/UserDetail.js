import React, {PureComponent} from "react";
import {Alert} from "react-native";
import {connect} from "react-redux";
import {Container, Content, List, Separator} from "../../components/index";
import Header from "../../components/header/BaseHeader";
import {Body, Left, Right, ListItem, Text, Button, Thumbnail, Icon} from "native-base";

/**
 * 用户详情
 */
class UserDetail extends PureComponent {
	render() {
		return (
			<Container>
				<Header {...this.props}/>
				<Content gray>
					<Separator/>
					<List>
						<ListItem avatar last>
							<Left>
								<Thumbnail square
										   source={{uri:'http://touxiang.qqzhi.com/uploads/2012-11/1111135112148.jpg'}}/>
							</Left>
							<Body>
							<Text>
								海龟大神
								&nbsp;
								<Icon name="man" style={styles.manIcon}/>
								<Icon name="woman" style={styles.womanIcon}/>
							</Text>

							<Text note style={{paddingBottom:20}}>昵称：杨可可</Text>
							</Body>
							<Right>
							</Right>
						</ListItem>
					</List>
					<Separator/>
					<List>
						<ListItem last>
							<Body>
							<Text>设置备注和标签</Text>
							</Body>
							<Right>
							</Right>
						</ListItem>
					</List>
					<Separator/>
					<Button block style={styles.button}>
						<Text>添加为我的好友</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

const styles = {
	button: {
		marginLeft: 15,
		marginRight: 15
	},
	manIcon:{
		fontSize: 16,
	},
	womanIcon:{
		fontSize: 16,
	},

};

UserDetail.propTypes = {
	userId: React.PropTypes.string, // 用户ID
}

UserDetail.defaultProps = {
	userId: '867200022156895,86720002215690321000493'
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(UserDetail);