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

    case _types.types.REQUEST_POSTS_LOADING:
      return { ...state,
        loadingPosts: true
      };

    case _types.types.REQUEST_POSTS_SUCCESS:
      return { ...state,
        loadingPosts: false,
        posts: action.payload
      };

    case _types.types.REQUEST_POSTS_FAILURE:
      return { ...state,
        loadingPosts: false,
        errorPosts: true
      };

    default:
      return state;
  }
};

exports.reducer = reducer;