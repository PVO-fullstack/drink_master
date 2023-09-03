export const getMedia = (screenSize) =>
  window.matchMedia(`(min-width: ${screenSize})`);

export const getDoesMatch = (screenSize) => getMedia(screenSize).matches;
