import { Box, Heading, Text, VStack, Avatar } from '@chakra-ui/react';

export interface CardContentProps {
  name?: string;
  srcImg?: string;
  job?: string;
  numberRoom?: number;
  email?: string;
}

export default function CardContentUser(props: CardContentProps) {
  return (
    <VStack spacing="4">
      <Box as="span" position="absolute" top="5px" left="5px">
        <Text fontSize="large">0{props.numberRoom}</Text>
      </Box>

      <Avatar size="2xl" name={props.name} src={props.srcImg} bg="gray.900" />

      <Heading as="h4" fontSize="lg" wordBreak="break-word">
        {props.name}
      </Heading>

      <Box as="span" width="100%" h="16" bg="gray.800" py="2">
        <Text px="2" wordBreak="break-word" w="100%" color="white">
          {props.job}
        </Text>
      </Box>

      <Box as="span">
        <Text px="2" wordBreak="break-word">
          {props.email}
        </Text>
      </Box>
    </VStack>
  );
}
