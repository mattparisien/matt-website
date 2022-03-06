import { useEffect, useState } from "react";
import { useMediaQuery } from "@material-ui/core";

const useHeaderSpacing = () => {
	const desktop = useMediaQuery("(min-width: 1200px)");
	const mobile = useMediaQuery("(max-width: 600px)");
	const [headerHeight, setHeaderHeight] = useState("80px");

	useEffect(() => {
		desktop && setHeaderHeight("35px");
		mobile && setHeaderHeight("30px");
	}, [desktop, mobile]);

	return [headerHeight];
};

export default useHeaderSpacing;
