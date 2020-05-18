export const COLORS = {
  PRIMARY: '109,90,162',
  SECONDARY: '233,26,101',
  WHITE: '255,255,255',
  BLACK: '30,30,30',
  WARM_GREY: '140,140,140',
  DISABLED: '206,206,206',
  GREY: '221,221,221',
  LIGHT_GREY: '230,230,230',
  LIGHTER_GREY: '250,250,250',
};

export const getColor = function (color = '') {
  const rgb = COLORS[color.toUpperCase()];
  if (!rgb) {
    console.warn(`Missing color: ${color}`);
    return `rgb(${COLORS.WHITE})`;
  }
  return `rgb(${rgb})`;
};
