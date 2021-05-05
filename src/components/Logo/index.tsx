import { HStack, Text, Box, Image } from '@chakra-ui/react';

export function SmallLogo() {
  return (
    <HStack spacing="2">
      <Text
        fontSize={['1xl', '2xl']}
        fontWeight="bold"
        letterSpacing="tight"
        _hover={{
          color: 'yellow.500',
        }}
        transition="color 1.3s"
        w="64"
      >
        cobogó
      </Text>
    </HStack>
  );
}

export function Logo() {
  return (
    <Box w={'300px'} h={'300px'}>
      <Image
        src="https://ik.imagekit.io/2agnc6wu5cbty/cobogo/logo_3ZXtIIwri.png"
        alt="logo-cobogo"
        boxShadow="10px 12px 11px -5px rgba(0,0,0,0.75)"
      />
    </Box>
  );
}
