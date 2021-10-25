"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "openViewSidebar", {
  enumerable: true,
  get: function () {
    return _actions.openViewSidebar;
  }
});
Object.defineProperty(exports, "getUserData", {
  enumerable: true,
  get: function () {
    return _actions2.getUserData;
  }
});
Object.defineProperty(exports, "getPosts", {
  enumerable: true,
  get: function () {
    return _actions3.getPosts;
  }
});
Object.defineProperty(exports, "getCommentsById", {
  enumerable: true,
  get: function () {
    return _actions4.getCommentsById;
  }
});
exports.store = void 0;

var _redux = require("redux");

var _reduxLogger = require("redux-logger");

var _reducer = require("./main/reducer");

var _actions = require("./main/actions");

var _reducer2 = require("./user/reducer");

var _actions2 = require("./user/actions");

var _reducer3 = require("./sidebar/reducer");

var _actions3 = require("./sidebar/actions");

var _reducer4 = require("./comment/reducer");

var _actions4 = require("./comment/actions");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = (0, _reduxLogger.createLogger)();
const composeEnhancers = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
const reducers = (0, _redux.combineReducers)({
  main: _reducer.reducer,
  user: _reducer2.reducer,
  sidebar: _reducer3.reducer,
  comment: _reducer4.reducer
});
const store = (0, _redux.createStore)(reducers, composeEnhancers((0, _redux.applyMiddleware)(logger, _reduxThunk.default)));
exports.store = store;