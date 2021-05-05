import { Flex } from '@chakra-ui/react';
import { Logo } from '../../components/Logo';
import { CONTAINER_WIDTH } from '../../config';

export default function Contact() {
  return (
    <Flex
      w={CONTAINER_WIDTH}
      margin="auto"
      mt="48"
      mb="48"
      placeItems="center"
      direction="column"
    >
      <Logo />
    </Flex>
  );
}
