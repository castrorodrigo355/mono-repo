import { types } from "./types";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "OPEN_SIDEBAR": {
			console.log("COMMENTS BEHAVIOR");
			return state;
		}
		case types.REQUEST_COMMENTS_LOADING:
			return {
				...state,
				loadingComments: true,
			};
		case types.REQUEST_COMMENTS_SUCCESS:
			return {
				...state,
				loadingComments: false,
				comments: action.payload,
			};
		case types.REQUEST_COMMENTS_FAILURE:
			return {
				...state,
				loadingComments: false,
				errorComments: true,
			};
		default:
			return state;
	}
};
