import { config } from '@tamagui/config/v2-native'
import { createFont, createTamagui } from 'tamagui'

const robotoFace = {
  normal: { normal: 'Poppins-Regular', italic: 'Poppins-Italic' },
  bold: { normal: 'Poppins-Bold', italic: 'Poppins-BoldItalic' },
  100: { normal: 'Poppins-Thin', italic: 'Poppins-ThinItalic' },
  200: { normal: 'Poppins-Light', italic: 'Poppins-LightItalic' },
  300: { normal: 'Poppins-ExtraLight', italic: 'Poppins-ExtraLightItalic' },
  400: { normal: 'Poppins-Regular', italic: 'Poppins-Italic' },
  500: { normal: 'Poppins-Medium', italic: 'Poppins-MediumItalic' },
  600: { normal: 'Poppins-SemiBold', italic: 'Poppins-SemiBoldItalic' },
  700: { normal: 'Poppins-Bold', italic: 'Poppins-BoldItalic' },
  800: { normal: 'Poppins-ExtraBold', italic: 'Poppins-ExtraBoldItalic' },
  900: { normal: 'Poppins-Black', italic: 'Poppins-BlackItalic' },
}

const bodyFont = createFont({
  ...config.fonts.body,
  family: 'Poppins',
  face: robotoFace,
  weight: {
    normal: 400,
    bold: 700,
    100: 100,
    200: 200,
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    800: 800,
    900: 900,
  },
})
const tamaguiConfig = createTamagui({
  ...config,
  fonts: {
    ...config.fonts,
    body: bodyFont,
  },
})
type Conf = typeof tamaguiConfig
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
export default tamaguiConfig
