import config from "../../utils/config";
const styles = {
    container: {
        flexGrow: 1
    },
    tabBarStyle: {},
    sceneStyle: {},
    titleStyle: {
        color: config.navTabColor,
        fontSize: 12
    },
    titleStyleSelected: {
        color: config.navTabSelectedColor
    },
    tabIcon: {
        color: config.navTabColor,
        fontSize: 28,
        marginBottom: -3
    },
    tabIconSelected: {
        color: config.navTabSelectedColor
    }
};

export default styles;