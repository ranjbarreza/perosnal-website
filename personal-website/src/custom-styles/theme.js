import { generateColor, generateSpacing } from 'style-genie';

export const defaultTheme = {
  spacing: generateSpacing(),
  palette: {
    black: generateColor('#000000'),
    white: generateColor('#FFFFFF'),
    darkGray: generateColor('#3d3d3d'),
    mediumGray: generateColor('#848484'),
    lightGray: generateColor('#bbbbbb'),
    blueGray: generateColor('#A8B1B8'),
    midnightBlue: generateColor('#00275E'),
    mediumBLue: generateColor('#3D72A4'),
    lightBlue: generateColor('#6D98AB'),
    mySinYellowOrange: generateColor('#FEB729'),
  },
};
