import { extendTheme } from '@chakra-ui/react';

// @ts-ignore
// eslint-disable-next-line import/prefer-default-export
export const theme = extendTheme({
  colors: {
    yellow: {
      400: '#FFF870',
      500: '#fff212',
      700: '#CCC200',
    },
  },
  fonts: {
    heading: 'fidena-regular, Open Sans',
    body: 'Phrasa-ExtraLight',
    mono: 'Phrasa-ExtraLight',
  },
  styles: {
    global: {
      body: { bg: 'black', color: 'white' },
    },
  },
});
