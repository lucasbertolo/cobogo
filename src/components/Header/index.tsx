import { LinkBox, Flex, HStack } from '@chakra-ui/react';
import { SmallLogo } from '../Logo';
import { LinkItem } from './LinkItem';

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      px="0"
      justifyContent="center"
      position="fixed"
      zIndex={1}
    >
      <Flex width="70%" justifyContent="space-between">
        <SmallLogo />

        <Flex direction="row">
          <LinkBox display="flex">
            <HStack spacing="12">
              <LinkItem name="Home" />
              <LinkItem name="Salas" />
              <LinkItem name="Fotos" />
              <LinkItem name="Contato" />
            </HStack>
          </LinkBox>
        </Flex>
      </Flex>
    </Flex>
  );
}
