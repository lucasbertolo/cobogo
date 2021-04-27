import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';

interface CardProps {
  name?: string;
  srcImg: string;
  job: string;
  numberRoom: number;
  email: string;
}

export default function Card(props: CardProps) {
  return (
    <Flex
      bg="white"
      //   alignItems="center"
      direction="column"
      //   justify="center"
      position="relative"
      boxShadow="-4px 4px 5px 0px rgba(64,64,64,0.45)"
      py="5"
    >
      <VStack spacing="4">
        <Box as="span" position="absolute" top="5px" left="5px">
          <Text fontSize="large">{props.numberRoom}</Text>
        </Box>

        <Image
          src={props.srcImg}
          //   fallback={props.imgSrc}
          alt="profile"
          maxH="50%"
          maxW="80%"
        />

        <Heading
          as="h4"
          textAlign="center"
          fontSize="lg"
          wordBreak="break-word"
        >
          {props.name}
        </Heading>

        <Text textAlign="justify" px="2" wordBreak="break-word">
          {props.job}
        </Text>

        <Text px="2" wordBreak="break-word">
          {props.email}
        </Text>
      </VStack>
    </Flex>
  );
}
