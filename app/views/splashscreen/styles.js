var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default {
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: width,
        height: width / (440 / 766)
    }
};
