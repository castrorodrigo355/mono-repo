"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserData = void 0;

var _types = require("./types");

const getUserData = () => {
  return async dispatch => {
    dispatch({
      type: _types.types.REQUEST_USER_LOADING
    });
    fetch("https://jsonplaceholder.typicode.com/users/1").then(response => response.json()).then(response => {
      dispatch({
        type: _types.types.REQUEST_USER_SUCCESS,
        payload: response
      });
    }).catch(error => {
      dispatch({
        type: _types.types.REQUEST_USER_FAILURE
      });
    });
  };
};

exports.getUserData = getUserData;