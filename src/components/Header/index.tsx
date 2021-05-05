import { Flex, HStack, LinkBox } from '@chakra-ui/react';
import { useScrolling } from '../../hooks/useScrolling';
import { SmallLogo } from '../Logo';
import { LinkItem } from './LinkItem';

export default function Header() {
  const isScrolling = useScrolling();

  return (
    <Flex
      as="header"
      h="20"
      px="0"
      width={['80%', '70%']}
      justifyContent="space-between"
      position="fixed"
      margin="auto"
      zIndex={1}
      opacity={isScrolling ? '0.15' : '0.35'}
      transition="opacity 0.4s"
      _hover={{
        opacity: '1',
      }}
    >
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
  );
}
