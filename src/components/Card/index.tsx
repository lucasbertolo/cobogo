import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CardContentUser from './CardContentUser';
import { CardProps } from './SubTenantButtons';

const MotionBox = motion(Box);

export default function Card({ tenant }: { tenant: CardProps }) {
  const [tenantActive, setTenantActive] = useState(true);

  const changeActiveUser = () => setTenantActive((currentActive) => !currentActive);

  return (
    <MotionBox
      as="article"
      overflowX="hidden"
      backgroundColor="rgba(255, 255, 255, 1)"
      borderRadius="10px"
      boxShadow="0 0 0 8px rgba(255, 255, 255, 0.2)"
      whileHover={{ scale: 1.1 }}
      color="black"
      position="relative"
    >
      <CardContentUser
        changeActiveUser={changeActiveUser}
        tenant={tenant}
        tenantActive={tenantActive}
      />
    </MotionBox>
  );
}
