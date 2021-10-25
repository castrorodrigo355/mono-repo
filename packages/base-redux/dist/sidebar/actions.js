"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosts = void 0;

var _types = require("./types");

const getPosts = () => {
  return async dispatch => {
    dispatch({
      type: _types.types.REQUEST_POSTS_LOADING
    });
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(response => {
      dispatch({
        type: _types.types.REQUEST_POSTS_SUCCESS,
        payload: response
      });
    }).catch(error => {
      dispatch({
        type: _types.types.REQUEST_POSTS_FAILURE
      });
    });
  };
};

exports.getPosts = getPosts;