import { StatusBarStyle } from 'react-native';

export default {
  title: 'dark',

  colors: {
    text: { primary: '#FEFCFB', secondary: '#121717' },

    background: { main: '#020524', medium: '#08094A', light: '#240f5A' },
    button: '#F1A208',

    barStyle: 'light-content' as StatusBarStyle | null | undefined,
  },

  fontFamily: {
    regular: 'Leelawadee',
    bold: 'Leelawadee Bold',
  },
};
