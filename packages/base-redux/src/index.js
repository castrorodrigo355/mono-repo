import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from "redux-logger";

import { reducer as main } from "./main/reducer";
import { openViewSidebar } from "./main/actions";

import { reducer as user } from "./user/reducer";
import { getUserData } from "./user/actions";

import { reducer as sidebar } from "./sidebar/reducer";
import { getPosts } from "./sidebar/actions";

import { reducer as comment } from "./comment/reducer";
import { getCommentsById } from "./comment/actions";

import thunk from "redux-thunk";

const logger = createLogger();

const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const reducers = combineReducers({
	main,
	user,
	sidebar,
	comment,
});

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(logger, thunk)),
);

export { store, openViewSidebar, getUserData, getPosts, getCommentsById };
