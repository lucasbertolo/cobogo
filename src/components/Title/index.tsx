import { Flex, Heading, Text } from '@chakra-ui/react';

interface TitleProps {
  label: string;
  rightInfo?: string;
}

export default function Title({ label, rightInfo }: TitleProps) {
  return (
    <Flex
      borderBottom="1px solid rgba(255,255,255,0.3)"
      w="100%"
      mb="8"
      justify="space-between"
      position="relative"
      py="5"
    >
      <Heading w="20%" fontSize="2xl">
        {label}
      </Heading>

      {rightInfo && (
        <Text
          h="100%"
          _after={{
            content: '""',
            width: '30%',
            height: '3px',
            right: 0,
            top: 0,
            position: 'absolute',
            zIndex: 9,
            background: 'yellow.500',
          }}
        >
          {rightInfo}
        </Text>
      )}
    </Flex>
  );
}
