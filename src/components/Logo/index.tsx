import { HStack, Text, Box } from '@chakra-ui/react';
import Image from 'next/image';

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
    <Box w="330px" h="350px" boxShadow="10px 12px 11px -5px rgba(0,0,0,0.75)">
      <Image
        src="/images/logo.png"
        alt="logo-cobogo"
        width="330px"
        height="350px"
      />
    </Box>
  );
}
