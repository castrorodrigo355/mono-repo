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
        console.log("COMMENTS BEHAVIOR");
        return state;
      }

    case _types.types.REQUEST_COMMENTS_LOADING:
      return { ...state,
        loadingComments: true
      };

    case _types.types.REQUEST_COMMENTS_SUCCESS:
      return { ...state,
        loadingComments: false,
        comments: action.payload
      };

    case _types.types.REQUEST_COMMENTS_FAILURE:
      return { ...state,
        loadingComments: false,
        errorComments: true
      };

    default:
      return state;
  }
};

exports.reducer = reducer;