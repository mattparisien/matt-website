import classNames from "classnames";

export default function Line(props) {
	const classes = classNames("c-line", { [props.classes]: props.classes });

	return <div className={classes}></div>;
}
