import { Box, BoxProps } from '@chakra-ui/react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

interface ArrowSlider {
  direction: 'left' | 'right';
  onClick(): void;
}

export default function ArrowSlider({ direction, onClick }: ArrowSlider) {
  const directionProps: BoxProps = {};

  if (direction === 'right') directionProps.right = '10px';
  else directionProps.left = '10px';

  return (
    <Box
      as="span"
      top="calc(50% - 20px)"
      pos="absolute"
      bg="black"
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
      opacity="0.7"
      onClick={onClick}
      {...directionProps}
    >
      {direction === 'right' ? <FaChevronRight /> : <FaChevronLeft />}
    </Box>
  );
}
