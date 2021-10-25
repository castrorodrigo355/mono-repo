import { types } from "./types";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.OPEN_SIDEBAR: {
			console.log("MAIN BEHAVIOR");
			return {
				...state,
				openSidebar: !state.openSidebar,
			};
		}
		case types.REQUEST_CONFIGURATION_LOADING:
			return {
				...state,
				loadingConfiguration: true,
			};
		case types.REQUEST_CONFIGURATION_SUCCESS:
			return {
				...state,
				loadingConfiguration: false,
				configuration: action.payload,
			};
		case types.REQUEST_CONFIGURATION_FAILURE:
			return {
				...state,
				loadingConfiguration: false,
				errorConfiguration: true,
			};
		default:
			return state;
	}
};
