import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  FlexProps,
  Avatar,
} from '@chakra-ui/react';

export interface CardProps {
  name?: string;
  srcImg?: string;
  job?: string;
  numberRoom?: number;
  email?: string;
  brandColor?: string;
  available?: boolean;
}

export default function Card(props: CardProps) {
  let additionalProps: FlexProps = {};

  if (props.brandColor) {
    additionalProps.borderBottom = `10px solid ${props.brandColor}`;
  }

  return (
    <Flex
      bg="yellow.500"
      direction="column"
      position="relative"
      boxShadow="0 -2px 4px #ffffff"
      py="9"
      color="black"
      justifyContent="space-between"
      {...additionalProps}
    >
      <VStack spacing="4">
        <Box as="span" position="absolute" top="5px" left="5px">
          <Text fontSize="large">0{props.numberRoom}</Text>
        </Box>

        <Avatar size="2xl" name={props.name} src={props.srcImg} bg="gray.900" />

        <Heading as="h4" fontSize="lg" wordBreak="break-word">
          {props.name}
        </Heading>

        <Box as="span" width="100%" h="16" bg="yellow.400" py="2">
          <Text px="2" wordBreak="break-word" w="100%">
            {props.job}
          </Text>
        </Box>

        <Box as="span">
          <Text px="2" wordBreak="break-word">
            {props.email}
          </Text>
        </Box>
      </VStack>
    </Flex>
  );
}
