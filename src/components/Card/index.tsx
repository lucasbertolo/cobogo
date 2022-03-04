import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CardContentUser, { CardProps } from "./CardContentUser";

const MotionBox = motion(Box);

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
      boxShadow="10px 12px 11px -5px rgba(0,0,0,0.75)"
      py="8"
      color="black"
      justifyContent="space-between"
      whileHover={{ scale: 1.1 }}
      {...additionalProps}
    >
      <CardContentUser {...props} />
    </MotionBox>
  );
}
