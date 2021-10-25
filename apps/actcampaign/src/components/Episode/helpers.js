import { Base64 } from "js-base64";

export const encodeData = (episode, image, index, creator) => {
	const data = JSON.stringify({
		...episode,
		image,
		number: index + 1,
		creator,
	});
	const result = Base64.encode(data);
	return result;
};
