'use strict';

// import * as TYPES from './types.js';

export function newRealm(obj) {
  console.log("actions");
  return {
    type: 'NEWREALM',
    obj:obj,
  };
}
