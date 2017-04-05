'use strict';

// import * as TYPES from './types.js';

export function newRealm(obj,id) {
  console.log("actions");
  obj.path = id + '.realm'
  return {
    type: 'NEWREALM',
    obj:obj,
  };
}
