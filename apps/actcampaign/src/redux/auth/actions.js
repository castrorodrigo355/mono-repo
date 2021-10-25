import { types } from "./types";

export const initLogin = () => {
	return async (dispatch) => {
		dispatch({ type: types.REQUEST_AUTH_LOADING });
		try {
			setTimeout(() => {
				dispatch({ type: types.REQUEST_AUTH_SUCCESS });
			}, 2000);
		} catch (error) {
			setTimeout(() => {
				dispatch({ type: types.REQUEST_AUTH_FAILURE });
			}, 2000);
		}
	};
};
