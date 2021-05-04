import { Flex, Icon, HStack, Link } from '@chakra-ui/react';
import {
  FaFacebookF,
  FaWhatsapp,
  FaPinterest,
  FaEnvelope,
} from 'react-icons/fa';
import SocialLink from './SocialLink';

export default function Social() {
  return (
    <Flex as="aside" direction="row">
      <HStack spacing="4">
        <SocialLink href="facebook.com" icon={FaFacebookF} />

        <SocialLink href="google.com" icon={FaWhatsapp} />

        <SocialLink href="pinterest.com" icon={FaPinterest} />

        <SocialLink href="facebook.com" icon={FaEnvelope} />
      </HStack>
    </Flex>
  );
}
