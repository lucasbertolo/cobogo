import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CardContentUser, { CardContentProps } from './CardContentUser';

const MotionBox = motion(Box);

export interface CardProps extends CardContentProps {
  brandColor?: string;
  available?: boolean;
}

export default function Card(props: CardProps) {
  let additionalProps: BoxProps = {};

  if (props.brandColor) {
    additionalProps.borderBottom = `10px solid ${props.brandColor}`;
  }

  return (
    <MotionBox
      bg="yellow.500"
      direction="column"
      position="relative"
      boxShadow="0 -2px 4px #ffffff"
      py="9"
      color="black"
      justifyContent="space-between"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...additionalProps}
    >
      <CardContentUser {...props} />
    </MotionBox>
  );
}
