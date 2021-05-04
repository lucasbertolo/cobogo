import { Flex, HStack, Box, Heading, Text, VStack } from '@chakra-ui/react';
import Slideshow from '../../components/Slideshow';
import Title from '../../components/Title';
import { CONTAINER_WIDTH } from '../../config';
import { GALLERY_IMAGES } from '../../config/data';

export default function Gallery() {
  return (
    <Flex h="100vh" mt="16" w={CONTAINER_WIDTH} m="auto" direction="column">
      <Title label="O Espaço" />

      <Flex w="100%" h="80%" m="auto" pos="relative" placeItems="center">
        <Box
          position="absolute"
          width="90%"
          bg="gray.800"
          h="95%"
          right="0"
          boxShadow="9px 10px 5px -5px rgba(0,0,0,0.2)"
        />

        <HStack zIndex="1" h="80%" w="100%" spacing="0" fontFamily="Open Sans">
          <Slideshow images={GALLERY_IMAGES} />

          <Box w="75%" h="100%">
            <VStack spacing="4">
              <Flex
                w="100%"
                flexDirection="row"
                bg="gray.700"
                justifyContent="space-between"
              >
                <Heading as="h4" fontSize="xl" w="50%" py="4" px="6">
                  Salas planejadas
                </Heading>
                <Text px="16" py="4" fontSize="sm">
                  2020
                </Text>
              </Flex>

              <Box p="6">
                <VStack spacing="3">
                  <Heading as="h6" color="red" fontSize="sm" w="100%">
                    Planejamento
                  </Heading>
                  <Text w="100%" fontSize="smaller">
                    Bla bla bla whiskas sache, Bla bla bla whiskas sache, Bla
                    bla bla whiskas sache, Bla bla bla whiskas sache
                  </Text>

                  <Heading as="h6" color="white" fontSize="sm" w="100%">
                    Inauguração
                  </Heading>
                  <Text w="100%" fontSize="smaller">
                    2020
                  </Text>

                  <Heading as="h6" fontSize="sm" w="100%">
                    Planejamento
                  </Heading>
                  <Text w="100%" fontSize="smaller">
                    Bla bla bla whiskas sache, Bla bla bla whiskas sache, Bla
                    bla bla whiskas sache, Bla bla bla whiskas sache
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
}
