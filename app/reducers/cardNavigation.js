import {cardStackReducer} from "react-native-navigation-redux-helpers";

const initialState = {
    key: 'config',
    index: 0,
    routes: [
        {
            key: 'home',
            index: 0,
        },
    ],
};

module.exports = cardStackReducer(initialState);
