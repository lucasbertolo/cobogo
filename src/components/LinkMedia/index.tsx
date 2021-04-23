import { Flex, VStack, Icon } from '@chakra-ui/react';
import {
  FaFacebookF,
  FaWhatsapp,
  FaPinterest,
  FaEnvelope,
} from 'react-icons/fa';

export default function LinkMedia() {
  return (
    <Flex
      as="aside"
      direction="column"
      w="10"
      bg="black"
      position="fixed"
      left={0}
      top="35%"
      py="6"
      px="3"
      borderRightRadius="2xl"
    >
      <VStack spacing="4">
        <Icon as={FaFacebookF} fontSize="20" color="yellow.300" />
        <Icon as={FaWhatsapp} fontSize="20" color="yellow.300" />
        <Icon as={FaPinterest} fontSize="20" color="yellow.300" />
        <Icon as={FaEnvelope} fontSize="20" color="yellow.300" />
      </VStack>
    </Flex>
  );
}
