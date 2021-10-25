import { types } from "./types";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "OPEN_SIDEBAR": {
			console.log("SIDEBAR BEHAVIOR");
			return state;
		}
		case types.REQUEST_USER_LOADING:
			return {
				...state,
				loadingUserData: true,
			};
		case types.REQUEST_USER_SUCCESS:
			return {
				...state,
				loadingUserData: false,
				userData: action.payload,
			};
		case types.REQUEST_USER_FAILURE:
			return {
				...state,
				loadingUserData: false,
				errorUserData: true,
			};
		default:
			return state;
	}
};
