import variables from "../styles/scss/_vars.module.scss";

export const shuffleColors = () => {
	const getKeyByValue = (object, value) => {
		return Object.keys(object).find(key => object[key] === value);
	};

	const colors = [];

	for (const item in variables) {
		if (item.startsWith("color")) {
			colors.push(variables[item]);
		}
	}

	const randomIndex = Math.ceil(Math.random() * colors.length - 1);
	const randomColorHex = colors[randomIndex];
	const randomColorName = getKeyByValue(variables, randomColorHex).replace(
		"colors-",
		""
	);
	return randomColorName;
};
