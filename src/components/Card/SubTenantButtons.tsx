import {
  Box, BoxProps, Flex, Text,
} from '@chakra-ui/react';
import { SocialMedia } from './SocialMediaSection';

export interface CardContentProps {
  name?: string;
  srcImg?: string;
  job?: string;
  email?: string;
}

export interface CardProps extends CardContentProps {
  brandColor?: string;
  available?: boolean;
  socialMedia?: SocialMedia;
  phone?: string;
  roomNumber: number;
  subTenant?: CardProps;
}

interface SubTenantButtonsProps {
  changeActiveUser: () => void;
  name: string;
  subTenant: CardProps;
  subTenantStyle: BoxProps;
  tenantStyle: BoxProps;
}

export function SubTenantButtons({
  changeActiveUser,
  name,
  subTenant,
  subTenantStyle,
  tenantStyle,
}: SubTenantButtonsProps) {
  return (
    <Flex position="absolute" direction="row" mt="8" bottom={0} left={0}>
      <Box
        padding="2"
        {...tenantStyle}
        onClick={changeActiveUser}
        cursor="pointer"
      >
        <Text>{name}</Text>
      </Box>
      <Box
        padding="2"
        {...subTenantStyle}
        onClick={changeActiveUser}
        cursor="pointer"
      >
        <Text>{subTenant.name}</Text>
      </Box>
    </Flex>
  );
}
