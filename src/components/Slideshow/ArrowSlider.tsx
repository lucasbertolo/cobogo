import { Box, BoxProps } from '@chakra-ui/react';

interface ArrowSlider {
  direction: 'left' | 'right';
  onClick(): void;
}

export default function ArrowSlider({ direction, onClick }: ArrowSlider) {
  const directionProps: BoxProps = {};

  if (direction === 'right') directionProps.right = '10px';
  else {
    directionProps.left = '10px';
    directionProps.transform = 'scale(-1)';
  }

  return (
    <Box
      as="span"
      top="calc(50% - 20px)"
      pos="absolute"
      bg="white"
      borderRadius="30px"
      w="40px"
      h="40px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      userSelect="none"
      cursor="pointer"
      fontWeight="bold"
      zIndex="2"
      fontSize="lg"
      onClick={onClick}
      {...directionProps}
    >
      {direction === 'right' ? '‣' : '‣'}
    </Box>
  );
}
