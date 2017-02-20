import config from "../../utils/config";
const styles = {
    content: {
        backgroundColor: config.contentBgColor,
    },
    photoMenu: {
        flex: 1,
        height: 100,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0,
    },
    myPhoto: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    myTitle: {
        flex: 7,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    myTitleText: {
        color: '#333333'
    },
    myForward: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    myForwardIcon: {
        color: '#c6c6c6'
    },
    gridCol: {
        justifyContent: 'center',
        alignItems: 'center'
    }
};
export default styles;
