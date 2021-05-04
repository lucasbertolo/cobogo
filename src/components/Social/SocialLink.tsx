import { Icon, Link, LinkProps } from '@chakra-ui/react';

interface SocialLink extends LinkProps {
  icon: Element;
}

export default function SocialLink({ icon, ...rest }) {
  return (
    <Link {...rest}>
      <Icon
        as={icon}
        fontSize="20"
        color="gray.500"
        _hover={{ color: 'whiteAlpha.900', textDecoration: 'none' }}
        transition="color 0.4s"
      />
    </Link>
  );
}
