import { getRandomIndex } from "./getRandomIndex";

export const shuffleThemes = themes => {
	return themes[getRandomIndex(themes)];
};
