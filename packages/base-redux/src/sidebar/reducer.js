import { types } from "./types";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "OPEN_SIDEBAR": {
			console.log("SIDEBAR BEHAVIOR");
			return state;
		}
		case types.REQUEST_POSTS_LOADING:
			return {
				...state,
				loadingPosts: true,
			};
		case types.REQUEST_POSTS_SUCCESS:
			return {
				...state,
				loadingPosts: false,
				posts: action.payload,
			};
		case types.REQUEST_POSTS_FAILURE:
			return {
				...state,
				loadingPosts: false,
				errorPosts: true,
			};
		default:
			return state;
	}
};
