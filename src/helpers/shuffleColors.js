//Shuffles theme colors

function shuffleColors(theme) {
	let randomColor;
	const colors = [];
	
	//Push only colors that aren't b&w & check if array includes
	for (let key in theme.colors) {
		if (
			key !== "light" &&
			key !== "dark" &&
			!colors.includes(theme.colors[key])
		) {
			colors.push(theme.colors[key]);
		}
	}

	const randomColorIndex = Math.ceil(Math.random() * colors.length);

	randomColor = colors[randomColorIndex];

	return randomColor;
}

export { shuffleColors };