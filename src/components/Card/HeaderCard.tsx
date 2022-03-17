import {
  Box, Flex, Image, Text,
} from '@chakra-ui/react';

interface HeaderCardProps {
  srcImg: string;
  name: string;
  job: string;
}

export function HeaderCard({ srcImg, name, job }: HeaderCardProps) {
  return (
    <Flex
      position="relative"
      flexShrink={0}
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        height="100%"
        backgroundImage={`url(${srcImg})`}
        width="100%"
        position="absolute"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        filter="blur(20px)"
      />

      <Flex flexDirection="column" alignItems="center" width="100%" py={6}>
        <Image
          transform="none"
          width="80px"
          height="80px"
          src={srcImg}
          alt="avatar"
          boxShadow="0 8px 8px rgba(0, 0, 0, 0.2)"
          borderRadius="50%"
          zIndex="1"
          objectPosition="center"
          object-fit="cover"
        />

        <Flex
          backgroundColor="yellow.500"
          width="100%"
          justifyContent="center"
          alignItems="center"
          direction="column"
          py={2}
          my={3}
          zIndex={1}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <Text as="h1" fontSize="lg" transform="none" paddingTop="2">
            {name}
          </Text>
          <Text as="h2" fontSize="md">
            {job}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
