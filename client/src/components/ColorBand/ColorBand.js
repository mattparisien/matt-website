import React from "react";
import classNames from "classnames";

function ColorBand({ colorSet }) {
	const classes = classNames(`o-color-band`);

	return (
		<div className={classes}>
			<div className={`o-color-band_mask  -gradient-${colorSet}`}></div>
		</div>
	);
}

export default ColorBand;
