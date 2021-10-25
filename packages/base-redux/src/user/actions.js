import { types } from "./types";

export const getUserData = () => {
	return async (dispatch) => {
		dispatch({ type: types.REQUEST_USER_LOADING });

		fetch("https://jsonplaceholder.typicode.com/users/1")
			.then((response) => response.json())
			.then((response) => {
				dispatch({
					type: types.REQUEST_USER_SUCCESS,
					payload: response,
				});
			})
			.catch((error) => {
				dispatch({ type: types.REQUEST_USER_FAILURE });
			});
	};
};
