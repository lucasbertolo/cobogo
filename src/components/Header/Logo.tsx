import { HStack, Text } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <HStack spacing="2">
      <Text
        fontSize={['1xl', '2xl']}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        cobogó
      </Text>
    </HStack>
  );
};
