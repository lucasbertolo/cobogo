import { Link, Text } from '@chakra-ui/react';

interface LinkItemProps {
  name: string;
  path?: string;
  isActive?: boolean;
}

export function LinkItem({ name, isActive = false, path = '' }: LinkItemProps) {
  return (
    <Link
      href={path}
      textDecoration="none"
      _hover={{ textDecoration: 'none', color: 'blackAlpha.700' }}
    >
      <Text>{name}</Text>
    </Link>
  );
}
