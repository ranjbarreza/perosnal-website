import { generateColor, generateSpacing } from 'style-genie';

export const defaultTheme = {
  spacing: generateSpacing(),
  palette: {
    black: generateColor('#000000'),
    white: generateColor('#FFFFFF'),
  },
};
