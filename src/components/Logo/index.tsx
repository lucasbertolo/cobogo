import { HStack, Text, Box, Image } from '@chakra-ui/react';

export function SmallLogo() {
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
}

export function Logo() {
  return (
    <Box w={'400px'} h={'300px'}>
      <Image
        src="https://ik.imagekit.io/2agnc6wu5cbty/logo_8fNKKUSyh.png"
        alt="logo-cobogo"
      />
    </Box>
  );
}
