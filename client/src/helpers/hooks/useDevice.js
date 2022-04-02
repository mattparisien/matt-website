import { useEffect, useState } from "react";

function useDevice() {
	const [device, setDevice] = useState(null);

	useEffect(() => {
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)
		) {
			setDevice("mobile");
		} else {
			setDevice("desktop");
		}
	}, []);

	return device;
}

export default useDevice;
