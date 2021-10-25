"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = void 0;

var _types = require("./types");

var _initialState = require("./initialState");

const reducer = (state = _initialState.initialState, action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      {
        console.log("SIDEBAR BEHAVIOR");
        return state;
      }

    case _types.types.REQUEST_USER_LOADING:
      return { ...state,
        loadingUserData: true
      };

    case _types.types.REQUEST_USER_SUCCESS:
      return { ...state,
        loadingUserData: false,
        userData: action.payload
      };

    case _types.types.REQUEST_USER_FAILURE:
      return { ...state,
        loadingUserData: false,
        errorUserData: true
      };

    default:
      return state;
  }
};

exports.reducer = reducer;