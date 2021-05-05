import { Flex, Heading, Text, VStack } from '@chakra-ui/react';

export default function Description() {
  return (
    <Flex mt="20" maxW="40%" zIndex={2}>
      <VStack spacing="4">
        <Heading
          as="h1"
          w="100%"
          fontSize={['1xl', '3xl', '5xl']}
          letterSpacing="tight"
        >
          Espaço Cobogó
        </Heading>

        <Heading as="h2" w="100%" fontSize="2xl" fontWeight="normal">
          Salas Comerciais
        </Heading>

        <Text fontSize="sm" fontFamily="Open Sans">
          Conheça nosso espaço personalizado com salas comerciais para seu
          negócio
        </Text>

        <Text fontSize="xs" width="100%" pt="4" fontFamily="Open Sans">
          * consulte a disponibilidade das salas
        </Text>
      </VStack>
    </Flex>
  );
}
