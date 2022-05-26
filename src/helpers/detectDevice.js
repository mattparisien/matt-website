export const detectDevice = () => {
	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)
	) {
		return "is-mobile";
	}
	return "is-desktop";
};
