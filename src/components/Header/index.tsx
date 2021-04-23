import { Flex, HStack } from '@chakra-ui/react';
import { LinkItem } from './LinkItem';
import { Logo } from './Logo';

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="0"
      justifyContent="space-around"
      bg="whiteAlpha.700"
      position="fixed"
      zIndex={1}
    >
      <Logo />

      <Flex direction="row">
        <HStack spacing="12">
          <LinkItem name="Home" />
          <LinkItem name="Salas" />
          <LinkItem name="Fotos" />
          <LinkItem name="Contato" />
        </HStack>
      </Flex>
    </Flex>
  );
}
