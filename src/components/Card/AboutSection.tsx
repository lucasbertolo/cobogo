import { Flex, Heading, Text } from '@chakra-ui/react';

interface AboutSectionProps {
  about: string;
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <Flex direction="column" py="1" px="4">
      <Heading as="h4" fontSize="xs" mb="2">
        Sobre
      </Heading>

      <Text>{about}</Text>
    </Flex>
  );
}
