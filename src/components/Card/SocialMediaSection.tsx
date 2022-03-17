import {
  Box, Flex, Icon, Link,
  Text,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
  AiFillPhone,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';

interface SocialMediaItems {
  link: string;
  label: string;
}

export interface SocialMedia {
  instagram?: SocialMediaItems;
  website?: string;
  facebook?: SocialMediaItems;
}

interface SocialMediaSectionProps {
  hasSubTenant: boolean;
  phone: string;
  socialMedia: SocialMedia;
}

export function SocialMediaSection({
  hasSubTenant,
  phone,
  socialMedia,
}: SocialMediaSectionProps) {
  return (
    <Flex
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      px="4"
      py={6}
      pb={hasSubTenant ? 16 : 6}
      fontSize="sm"
      zIndex={1}
    >
      {phone && <CardDetailsInfo icon={AiFillPhone} label={phone} />}

      {socialMedia?.instagram && (
        <CardDetailsInfo
          icon={AiOutlineInstagram}
          label={socialMedia.instagram.label}
          link={socialMedia.instagram.link}
        />
      )}

      {socialMedia?.facebook && (
        <CardDetailsInfo
          icon={AiOutlineFacebook}
          label={socialMedia.facebook.label}
          link={socialMedia.facebook.link}
        />
      )}

      {socialMedia?.website && (
        <CardDetailsInfo
          icon={FaGlobe}
          label={socialMedia.website}
          link={socialMedia.website}
        />
      )}
    </Flex>
  );
}
interface CardDetailsInfoProps {
  label: string;
  icon: IconType;
  link?: string;
}

function CardDetailsInfo({ label, icon, link }: CardDetailsInfoProps) {
  const content = link ? (
    <Link href={link} isExternal>
      <Text px="2" wordBreak="break-word">
        {label}
      </Text>
    </Link>
  ) : (
    <Text px="2" wordBreak="break-word">
      {label}
    </Text>
  );

  return (
    <Flex
      as="span"
      mb="2"
      flexDir="row"
      justifyContent="center"
      placeItems="center"
    >
      <Icon as={icon} fontSize="16" />
      <Box width="0.5" mx="2" height="5" backgroundColor="lightgrey" />
      {content}
    </Flex>
  );
}
