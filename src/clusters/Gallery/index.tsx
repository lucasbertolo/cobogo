import { Flex, HStack, Box, Heading, Text, VStack } from '@chakra-ui/react';
import Slideshow from '../../components/Slideshow';
import Title from '../../components/Title';
import { GALLERY_IMAGES } from '../../config/data';

export default function Gallery() {
  return (
    <Flex w="100%" m="50px auto" direction="column">
      <Title label="O Espaço" />

      <Flex
        w="100%"
        minH="90vh"
        h="90vh"
        m="auto"
        pos="relative"
        placeItems="center"
      >
        <Box
          position="absolute"
          width={['100%', '90%']}
          bg="gray.800"
          h={['110%', '100%']}
          right="0"
          boxShadow="9px 10px 5px -5px rgba(0,0,0,0.2)"
        />

        <Flex
          zIndex="1"
          h={['100vh', '70%']}
          w="100%"
          spacing="0"
          fontFamily="Open Sans"
          direction={['column', 'row']}
        >
          <Slideshow images={GALLERY_IMAGES} />

          <Box w={['100%', '75%']} h="100%">
            <VStack spacing="1">
              <Flex
                w="100%"
                flexDirection="row"
                bg="gray.700"
                justifyContent="space-between"
              >
                <Heading as="h4" fontSize="xl" w="50%" py="4" px="6">
                  Salas Comerciais
                </Heading>
                <Text px="16" py="4" fontSize="sm">
                  2020
                </Text>
              </Flex>

              <Box p="6">
                <VStack spacing="3">
                  <Heading as="h6" color="red" fontSize="sm" w="100%">
                    Conforto
                  </Heading>
                  <Text w="100%" fontSize="smaller" lineHeight="5">
                    Além da excelente localização do imóvel, o{' '}
                    <b>Espaço Cobogó</b> possui cozinha, dois banheiros, e um
                    belo espaço de recepção. Com um ambiente agradavél e
                    tranquilo, todas as salas possuem ar condicionado e
                    excelente espaço{' '}
                  </Text>

                  <Heading as="h6" color="white" fontSize="sm" w="100%">
                    Inauguração
                  </Heading>
                  <Text w="100%" fontSize="smaller">
                    2020
                  </Text>

                  <Heading as="h6" fontSize="sm" w="100%">
                    Endereço
                  </Heading>
                  <Text w="100%" fontSize="smaller">
                    Rua Dr. Otávio Teixeira Mendes, 1947 - Bairro Alto
                  </Text>

                  <Text w="100%" fontSize="smaller">
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
