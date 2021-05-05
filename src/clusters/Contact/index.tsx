import { Flex } from '@chakra-ui/react';
import { Logo } from '../../components/Logo';

export default function Contact() {
  return (
    <Flex
      w="100%"
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
