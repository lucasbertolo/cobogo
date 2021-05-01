import { Flex } from '@chakra-ui/react';
import Slideshow from '../../components/Slideshow';
import Title from '../../components/Title';
import { CONTAINER_WIDTH } from '../../config';
import { GALLERY_IMAGES } from '../../config/data';

export default function Gallery() {
  return (
    <Flex h="100vh" mt="16" w={CONTAINER_WIDTH} m="auto" direction="column">
      <Title label="Espaço" />
      <Slideshow images={GALLERY_IMAGES} />
    </Flex>
  );
}
