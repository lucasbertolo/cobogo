import {
  Flex,
  Heading,
  Box,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';

// TODO - RESPONSIVE AND IMAGE IMPROVEMENT
export default function Home() {
  const [isLargerThanTablet] = useMediaQuery('(min-width: 1180px)');

  return (
    <Flex
      margin="0 auto"
      h="100vh"
      w="75%"
      justifyContent="flex-start"
      placeItems="center"
      direction="row"
    >
      <Flex mt="20" ml="5" maxW="40%" zIndex={2}>
        <VStack spacing="4">
          <Heading as="h1" w="100%" fontSize="5xl" letterSpacing="tight">
            Espaço Cobogó
          </Heading>

          <Heading as="h2" w="100%" fontSize="2xl" fontWeight="normal">
            Salas Comerciais
          </Heading>

          <Text fontSize="sm" fontFamily="Open Sans">
            Conheça nossas salas e texto maneiro com frase aleatória que seja
            mais ou menos desse tamanho
          </Text>

          <Text fontSize="xs" width="100%">
            * consulte a disponibilidade das salas
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
