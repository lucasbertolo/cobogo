import { Flex, Image, Text, VStack, Box, HStack } from '@chakra-ui/react';
import { CONTAINER_WIDTH } from '../../config';
import Title from '../../components/Title';
import { CONTACT_SUBTEXT } from '../../config/data';

export default function Contact() {
  return (
    <Flex
      w={CONTAINER_WIDTH}
      margin="auto"
      mt="16"
      placeItems="center"
      direction="column"
    >
      <Title label="Contate nos" />

      <Text
        mb="4"
        textAlign="justify"
        width="60%"
        alignSelf="flex-start"
        fontSize="sm"
        fontFamily="Open Sans"
        lineHeight="6"
      >
        {CONTACT_SUBTEXT}
      </Text>

      <Flex h="70vh" w="100%" placeItems="center">
        <HStack h="100%" spacing="8">
          <Flex h="80%">
            <Image src="images/logo.png" h="60%" alt="logo" margin="auto" />
          </Flex>
          <VStack spacing="4">
            <Text w="100%">Rua Dr. Otavio Teixeira Martins, 1947</Text>
            <Text w="100%">
              Bairro Alto, <i>Piracicaba - SP</i>
            </Text>
            <Text w="100%">email@contato.com.br</Text>
          </VStack>
        </HStack>
      </Flex>
    </Flex>
  );
}
