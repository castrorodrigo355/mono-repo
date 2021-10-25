import { Base64 } from "js-base64";

export const generateData = (match) => {
	const { data } = match.params;
	const decoded = Base64.decode(data);
	const result = JSON.parse(decoded);
	console.log("EPISODE DATA: ", result);
	return result;
};
