import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Slideshow from "../../components/Slideshow";
import Title from "../../components/Title";
import { GALLERY_IMAGES } from "../../config/data";

export default function Gallery() {
  return (
    <Flex w="100%" marginX="auto" marginY={["70px", "50px"]} direction="column">
      <Title label="O Espaço" />

      <Flex
        w="100%"
        minH="90vh"
        h="90vh"
        marginY={["150px", "50px"]}
        marginX="auto"
        pos="relative"
        placeItems="center"
      >
        <Box
          position="absolute"
          width={["100%", "90%"]}
          bg="gray.800"
          h={["100%", "100%"]}
          right="0"
          boxShadow="9px 10px 5px -5px rgba(0,0,0,0.2)"
        />

        <Flex
          zIndex="1"
          h={["100vh", "80%"]}
          w="100%"
          spacing="0"
          direction={["column", "row"]}
        >
          <Slideshow images={GALLERY_IMAGES} />

          <Box w={["100%", "75%"]} bg="gray.800">
            <VStack spacing="1">
              <Flex
                w="100%"
                flexDirection="row"
                bg="gray.700"
                justifyContent="space-between"
              >
                <Heading as="h4" fontSize={["sm", "xl"]} w={["100%", "100%"]} py="4" px={["4", "6"]}>
                  Espaço Cobogó
                </Heading>
              </Flex>

              <Box p="6">
                <VStack spacing="3">
                  <Heading as="h6" fontSize="large" w="100%">
                    Ambiente
                  </Heading>
                  <Text w="100%" fontSize="md" lineHeight="5">
                    Além da excelente localização do imóvel, o Espaço Cobogó
                    possui uma fachada linda, recepção com vista para o jardim,
                    copa e dois banheiros. Com um ambiente agradável e
                    tranquilo, todas as salas possuem ar-condicionado e um
                    excelente espaço para recebê-lo !
                  </Text>

                  <Heading as="h6" color="white" fontSize="large" w="100%">
                    Inauguração
                  </Heading>
                  <Text w="100%" fontSize="md">
                    2020
                  </Text>

                  <Heading as="h6" fontSize="large" w="100%">
                    Endereço
                  </Heading>
                  <Text w="100%" fontSize="md">
                    Rua Dr. Otávio Teixeira Mendes, 1947 - Bairro Alto
                  </Text>

                  <Text w="100%" fontSize="md">
                    Piracicaba, São Paulo
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
