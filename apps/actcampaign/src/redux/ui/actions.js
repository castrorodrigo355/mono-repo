import { types } from "./types";

export const getShows = () => {
	return async (dispatch) => {
		dispatch({ type: types.REQUEST_SHOWS_LOADING });
		try {
			// const url = "https://jsonplaceholder.typicode.com/users";
			const url = "http://localhost:5000/api/integrations/company/shows";
			const res = await fetch(url);
			if (res.status === 200) {
				const response = await res.json();
				setTimeout(() => {
					dispatch({
						type: types.REQUEST_SHOWS_SUCCESS,
						payload: response,
					});
				}, 2000);
			} else {
				setTimeout(() => {
					dispatch({ type: types.REQUEST_SHOWS_FAILURE });
				}, 2000);
			}
		} catch (error) {
			setTimeout(() => {
				dispatch({ type: types.REQUEST_SHOWS_FAILURE });
			}, 2000);
		}
	};
};

export const openUser = () => ({
	type: types.USER_OPEN,
});

export const setBrowserType = (data) => ({
	type: types.SET_BROWSER_TYPE,
	payload: data,
});
