import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      '400': '#FFF870',
      '500': '#fff212',
      '700': '#CCC200',
    },
  },
  fonts: {
    heading: 'ABeeZee',
    body: 'ABeeZee',
    mono: 'Open Sans',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'white',
      },
    },
  },
});
