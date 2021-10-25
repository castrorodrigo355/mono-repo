"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommentsById = void 0;

var _types = require("./types");

const getCommentsById = id => {
  return async dispatch => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    dispatch({
      type: _types.types.REQUEST_COMMENTS_LOADING
    });

    try {
      const res = await fetch(url);

      if (res.status === 200) {
        const response = await res.json();
        dispatch({
          type: _types.types.REQUEST_COMMENTS_SUCCESS,
          payload: response
        });
      } else {
        dispatch({
          type: _types.types.REQUEST_COMMENTS_FAILURE
        });
      }
    } catch (error) {
      dispatch({
        type: _types.types.REQUEST_COMMENTS_FAILURE
      });
    }
  };
};

exports.getCommentsById = getCommentsById;