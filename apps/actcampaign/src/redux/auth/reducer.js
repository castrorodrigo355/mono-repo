import { types } from "./types";

const initialState = {
	loadingAuth: false,
	errorAuth: false,
	auth: false,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.REQUEST_AUTH_LOADING:
			return {
				...state,
				loadingAuth: true,
			};
		case types.REQUEST_AUTH_FAILURE:
			return {
				...state,
				loadingAuth: false,
				errorAuth: true,
			};
		case types.REQUEST_AUTH_SUCCESS:
			return {
				...state,
				loadingAuth: false,
				auth: true,
			};
		default:
			return state;
	}
};
