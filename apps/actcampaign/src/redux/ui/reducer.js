import { types } from "./types";

const initialState = {
	userOpen: false,
	loadingShows: false,
	errorShows: false,
	shows: null,
	browserType: null,
};

export const uiReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.REQUEST_SHOWS_LOADING:
			return {
				...state,
				loadingShows: true,
			};
		case types.REQUEST_SHOWS_FAILURE:
			return {
				...state,
				loadingShows: false,
				errorShows: true,
			};
		case types.REQUEST_SHOWS_SUCCESS:
			return {
				...state,
				loadingShows: false,
				shows: payload,
			};
		case types.USER_OPEN:
			return {
				...state,
				userOpen: !state.userOpen,
			};
		case types.SET_BROWSER_TYPE:
			return {
				...state,
				browserType: payload,
			};
		default:
			return state;
	}
};
