import { Flex, Link, Text, Box } from '@chakra-ui/react';
import { CONTAINER_WIDTH } from '../../config';
import Social from '../Social';

export default function Footer() {
  return (
    <Flex position="absolute" bottom="2" left="0" width="100%">
      <Flex w={CONTAINER_WIDTH} margin="auto" justifyContent="space-between">
        <Box as="span">
          <Link
            href="https://lucasbertolo.github.io"
            _hover={{ textDecoration: 'none' }}
            target="_blank"
          >
            <Text
              fontSize="smaller"
              // fontFamily="Open Sans"
              color="gray.300"
              _hover={{ color: 'whiteAlpha.900' }}
              transition="color 0.4s"
            >
              @ lucasbertolo
            </Text>
          </Link>
        </Box>
        <Text
          fontSize="smaller"
          // fontFamily="Open Sans"
          color="gray.300"
          _hover={{ color: 'whiteAlpha.900' }}
          transition="color 0.4s"
        >
          2021
        </Text>
      </Flex>
    </Flex>
  );
}