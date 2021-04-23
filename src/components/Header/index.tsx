import { Flex, HStack } from '@chakra-ui/react';
import { SmallLogo } from '../Logo';
import { LinkItem } from './LinkItem';

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="10"
      px="0"
      justifyContent="space-around"
      position="fixed"
      zIndex={1}
    >
      <SmallLogo />

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
