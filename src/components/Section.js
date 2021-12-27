import React, { forwardRef } from "react";
import classNames from "classnames";
import SectionWave from "./SectionWave";

function Section(props, ref) {
	return (<section className={props.classes} ref={ref}>
		{props.hasWave && <SectionWave ref={ref}/>}
		{props.children}
		</section>)
	;
}

export default forwardRef(Section);
