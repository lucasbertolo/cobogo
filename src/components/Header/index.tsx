import { Flex, HStack, LinkBox } from '@chakra-ui/react';
import { CONTAINER_WIDTH } from '../../config';
import { useScrolling } from '../../hooks/useScrolling';
import { SmallLogo } from '../Logo';
import { LinkItem } from './LinkItem';

export default function Header() {
  const isScrolling = useScrolling();

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
      opacity={isScrolling ? '0.15' : '0.35'}
      transition="opacity 0.4s"
      _hover={{
        opacity: '1',
      }}
    >
      <Flex width={CONTAINER_WIDTH} justifyContent="space-between">
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
