import { Flex, SimpleGrid, Text, Wrap } from '@chakra-ui/react';
import Card from '../../components/Card';
import Title from '../../components/Title';
import { CONTAINER_WIDTH } from '../../config';
import {
  CURRENT_TENANTS,
  TENANTS_SUBTEXT,
  TOTAL_ROOMS,
} from '../../config/data';

export default function Tenants() {
  const availableRooms = TOTAL_ROOMS - CURRENT_TENANTS.length;

  let tenants = [];

  if (availableRooms > 0) {
    tenants = CURRENT_TENANTS.concat([{ available: true }]);
  }

  const availableRoomsLabel = `${availableRooms || 'Nenhuma'} sala ${
    availableRooms > 1 ? 's' : ''
  } disponive${availableRooms > 1 ? 'is' : 'l'}`;

  return (
    <Flex
      margin="0 auto"
      w={CONTAINER_WIDTH}
      justifyContent="flex-start"
      placeItems="center"
      direction="column"
    >
      <Title label="Nossos Colegas" rightInfo={availableRoomsLabel} />

      <Text
        mb="8"
        textAlign="justify"
        width="60%"
        alignSelf="flex-start"
        fontSize="sm"
        fontFamily="Open Sans"
        lineHeight="6"
      >
        {TENANTS_SUBTEXT}
      </Text>

      <SimpleGrid
        minChildWidth="150px"
        spacing="7"
        paddingY="10"
        w="100%"
        minH="450px"
      >
        {tenants
          .sort((a, b) => a.numberRoom - b.numberRoom)
          .map((tenant, index) => (
            <Card
              {...tenant}
              key={`${tenant.name}${tenant.numberRoom}${index}`}
            />
          ))}
      </SimpleGrid>
    </Flex>
  );
}
