import thunk from "redux-thunk";
import { uiReducer } from "../redux/ui/reducer";
import { authReducer } from "../redux/auth/reducer";
import { createLogger } from "redux-logger";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
});

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(logger, thunk)),
);
