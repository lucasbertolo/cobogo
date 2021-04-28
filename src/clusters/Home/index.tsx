import { Flex } from '@chakra-ui/react';
import { CONTAINER_WIDTH } from '../../config';
import Description from './Description';
import MainImage from './MainImage';

export default function Home() {
  return (
    <Flex
      margin="0 auto"
      minH="100vh"
      w={CONTAINER_WIDTH}
      justifyContent="flex-start"
      placeItems="center"
      direction="row"
    >
      <Description />
      <MainImage />
    </Flex>
  );
}
