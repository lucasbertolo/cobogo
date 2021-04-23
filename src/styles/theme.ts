import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      '500': '#fff212',
      '700': '#ffb812',
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
        bg: 'yellow.500',
        color: 'black',
      },
    },
  },
});
