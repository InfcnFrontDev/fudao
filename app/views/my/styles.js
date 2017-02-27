import {theme} from "../../utils/";
const styles = {
	myCover: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: theme.deviceWidth + 3,
		height: 180,
	},
	myPhoto: {
		width: 80,
		height: 80,
		borderRadius: 40,
	},
	gridCol: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	listText: {
		fontSize: theme.DefaultFontSize,
	}
};
export default styles;
