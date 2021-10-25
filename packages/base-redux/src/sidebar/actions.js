import { types } from "./types";

export const getPosts = () => {
	return async (dispatch) => {
		dispatch({ type: types.REQUEST_POSTS_LOADING });
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((response) => {
				dispatch({
					type: types.REQUEST_POSTS_SUCCESS,
					payload: response,
				});
			})
			.catch((error) => {
				dispatch({ type: types.REQUEST_POSTS_FAILURE });
			});
	};
};
