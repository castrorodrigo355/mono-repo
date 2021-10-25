"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = void 0;

var _types = require("./types");

var _initialState = require("./initialState");

const reducer = (state = _initialState.initialState, action) => {
  switch (action.type) {
    case _types.types.OPEN_SIDEBAR:
      {
        console.log("MAIN BEHAVIOR");
        return { ...state,
          openSidebar: !state.openSidebar
        };
      }

    case _types.types.REQUEST_CONFIGURATION_LOADING:
      return { ...state,
        loadingConfiguration: true
      };

    case _types.types.REQUEST_CONFIGURATION_SUCCESS:
      return { ...state,
        loadingConfiguration: false,
        configuration: action.payload
      };

    case _types.types.REQUEST_CONFIGURATION_FAILURE:
      return { ...state,
        loadingConfiguration: false,
        errorConfiguration: true
      };

    default:
      return state;
  }
};

exports.reducer = reducer;