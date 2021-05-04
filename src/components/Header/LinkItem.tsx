import { Link, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

interface LinkItemProps extends ChakraLinkProps {
  name: string;
  path?: string;
  isActive?: boolean;
}

export function LinkItem({ name, isActive = false, ...rest }: LinkItemProps) {
  return (
    <Link
      textDecoration="none"
      _hover={{ textDecoration: 'none', color: 'whiteAlpha.500' }}
      {...rest}
    >
      <Text>{name}</Text>
    </Link>
  );
}
