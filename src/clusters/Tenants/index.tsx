import { Flex, SimpleGrid, Text, useMediaQuery, Wrap } from "@chakra-ui/react";
import Card from "../../components/Card";
import Title from "../../components/Title";
import {
  CURRENT_TENANTS,
  TENANTS_SUBTEXT,
  TOTAL_ROOMS,
} from "../../config/data";

export default function Tenants() {
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");

  const availableRooms = TOTAL_ROOMS - CURRENT_TENANTS.length;

  const availableRoomsLabel = `${availableRooms || "Nenhuma"} sala ${
    availableRooms > 1 ? "s" : ""
  } disponive${availableRooms > 1 ? "is" : "l"}`;

  return (
    <Flex
      margin="0 auto"
      w="100%"
      justifyContent="flex-start"
      placeItems="center"
      direction="column"
    >
      <Title
        label="Nossos Profissionais"
        rightInfo={isLargerThan720 ? availableRoomsLabel : ""}
      />

      <Text
        mb="8"
        textAlign="justify"
        width={["100%", "60%"]}
        alignSelf="flex-start"
        fontSize="sm"
        fontFamily="Open Sans"
        lineHeight="6"
      >
        {TENANTS_SUBTEXT}
      </Text>

      <SimpleGrid
        minChildWidth="150px"
        spacing="14"
        paddingY="10"
        w="100%"
        minH="450px"
      >
        {CURRENT_TENANTS.map((tenant, index) => (
          <Card {...tenant} key={`${tenant.name}${index}`} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
