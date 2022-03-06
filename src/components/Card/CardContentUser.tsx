import {
  Avatar,
  Flex,
  Heading,
  Icon,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  AiOutlineInstagram,
  AiFillPhone,
  AiOutlineFacebook,
} from "react-icons/ai";

import { FaGlobe } from "react-icons/fa";

export interface CardContentProps {
  name?: string;
  srcImg?: string;
  job?: string;
  email?: string;
}

interface SocialMedia {
  link: string;
  label: string;
}

export interface CardProps extends CardContentProps {
  brandColor?: string;
  available?: boolean;
  socialMedia?: {
    instagram?: SocialMedia;
    website?: string;
    facebook?: SocialMedia;
  };
  phone?: string;
  roomNumber: number;
}

export default function CardContentUser(props: CardProps) {
  return (
    <VStack spacing="4">
      <Flex px="4" justifyContent={"flex-start"} alignItems="flex-start" width="100%">
        <Heading as="h4" fontSize="lg" wordBreak="break-word">
          Sala {props.roomNumber}
        </Heading>
      </Flex>
      <Avatar size="2xl" name={props.name} src={props.srcImg} bg="gray.900" />
      <Heading as="h4" fontSize="lg" wordBreak="break-word">
        {props.name}
      </Heading>
      <Flex
        as="span"
        width="100%"
        h="16"
        bg="gray.800"
        py="2"
        placeItems={"center"}
      >
        <Text px="2" wordBreak="break-word" w="100%" color="white" paddingX="4">
          {props.job}
        </Text>
      </Flex>
      <Flex
        flexDir={"column"}
        justifyContent="flex-start"
        alignItems="flex-start"
        px="2"
        fontSize={"sm"}
      >
        {props.phone && (
          <CardDetailsInfo icon={AiFillPhone} label={props.phone} />
        )}

        {props.socialMedia?.instagram && (
          <CardDetailsInfo
            icon={AiOutlineInstagram}
            label={props.socialMedia.instagram.label}
            link={props.socialMedia.instagram.link}
          />
        )}

        {props.socialMedia?.facebook && (
          <CardDetailsInfo
            icon={AiOutlineFacebook}
            label={props.socialMedia.facebook.label}
            link={props.socialMedia.facebook.link}
          />
        )}

        {props.socialMedia?.website && (
          <CardDetailsInfo
            icon={FaGlobe}
            label={props.socialMedia.website}
            link={props.socialMedia.website}
          />
        )}
      </Flex>
    </VStack>
  );
}

interface CardDetailsInfoProps {
  label: string;
  icon: IconType;
  link?: string;
}

const CardDetailsInfo = ({ label, icon, link }: CardDetailsInfoProps) => {
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
      flexDir={"row"}
      justifyContent="center"
      placeItems={"center"}
    >
      <Icon as={icon} />
      {content}
    </Flex>
  );
};
