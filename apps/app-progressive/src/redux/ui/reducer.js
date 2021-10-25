import { types } from "./types";

const initialState = {
	userOpen: false,
	loadingShows: false,
	errorShows: false,
	shows: null,
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
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
				shows: action.payload,
			};
		case types.USER_OPEN:
			return {
				...state,
				userOpen: !state.userOpen,
			};
		default:
			return state;
	}
};
