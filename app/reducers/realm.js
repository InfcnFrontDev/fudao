'use strict';


import Realm from 'realm'
const intialrealm = {};
import {
    ToastAndroid
} from 'react-native'
export default function realm(state = intialrealm,action){

  switch(action.type){

    case 'NEWREALM':
      state =  new Realm(action.obj);
      return state;
    default:
      return state;

  }
}
