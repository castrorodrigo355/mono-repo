import { types } from "./types";

export const getCommentsById = (id) => {
	return async (dispatch) => {
		const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
		dispatch({ type: types.REQUEST_COMMENTS_LOADING });
		try {
			const res = await fetch(url);
			if (res.status === 200) {
				const response = await res.json();
				dispatch({
					type: types.REQUEST_COMMENTS_SUCCESS,
					payload: response,
				});
			} else {
				dispatch({ type: types.REQUEST_COMMENTS_FAILURE });
			}
		} catch (error) {
			dispatch({ type: types.REQUEST_COMMENTS_FAILURE });
		}
	};
};
