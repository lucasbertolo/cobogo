import {
  Flex,
  Box,
  Image,
  useMediaQuery,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import LinkMedia from '../LinkMedia';

// TODO -  Improve Image quality

export default function Home() {
  const [isLargerThanTablet] = useMediaQuery('(min-width: 1180px)');

  console.log('isLargerThanTab', isLargerThanTablet);

  const boxProps: BoxProps = {};

  const flexProps: FlexProps = {};

  if (isLargerThanTablet) {
    console.log('aqui');
    boxProps.mt = '140px';
    boxProps.ml = '20';

    flexProps.backgroundRepeat = 'no-repeat';
    flexProps.backgroundPosition = 'right';
    flexProps.backgroundSize = 'contain';
    flexProps.justifyContent = 'flex-start';
    flexProps.bgImage =
      'url(https://ik.imagekit.io/2agnc6wu5cbty/WhatsApp_Image_2021-04-22_at_19.40.30-removebg-preview_5BtURgbTSz.png)';
  }

  return (
    <Flex
      margin="20px auto"
      h="90vh"
      w="80%"
      justifyContent="center"
      position="relative"
      direction="row"
      {...flexProps}
    >
      <LinkMedia />

      <Box margin="auto" w={'400px'} h={'300px'} {...boxProps}>
        <Image
          src="https://ik.imagekit.io/2agnc6wu5cbty/logo_B-1mkNVeA4.png"
          alt="logo-cobogo"
        />
      </Box>
    </Flex>
  );
}
