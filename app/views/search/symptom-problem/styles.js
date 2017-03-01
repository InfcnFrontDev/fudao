import {theme} from "../../../utils/";
const styles = {
	content:{
		flex:1,
		backgroundColor: theme.contentBgColor,
	},
	itemContainer: {
		padding: 14,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	item: {
		backgroundColor: '#eeeeee',
		margin: 5,
		padding: 10,
		height: 30,
		justifyContent: 'center',
		borderRadius: 5,
	}
};

export default styles;
