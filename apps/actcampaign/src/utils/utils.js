export const getBrowserType = () => {
	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent,
		)
	) {
		return "mobile";
	} else {
		return "web";
	}
};
