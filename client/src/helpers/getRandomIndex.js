export const getRandomIndex = (themes) => {
  return Math.ceil(Math.random() * (themes.length - 0 + 1) - 1);
};