import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Card, { CardProps } from '../../components/Card';
import { CONTAINER_WIDTH } from '../../config';

const TOTAL_ROOMS = 4;

const currentTenants: CardProps[] = [
  {
    name: 'LMS Arquitetura',
    job: 'Arquiteta, Urbanista e design de interiores',
    email: 'lms-arquitetura@gmail.com',
    brandColor: '#a08c91',
    numberRoom: 1,
  },
  {
    name: 'Lais M. Salvador',
    srcImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaqe2hGGasLhgsoVRWS-J9jZPbRRzBL65AA&usqp=CAU',
    job: 'Arquiteta, Urbanista e design de interiores',
    email: 'lms-arquitetura@gmail.com',
    numberRoom: 3,
  },
  {
    name: 'Ester',
    job: 'Psicologa',
    email: 'lms-arquitetura@gmail.com',
    numberRoom: 2,
  },
];

export default function Tenants() {
  const availableRooms = TOTAL_ROOMS - currentTenants.length;

  let tenants = [];

  if (availableRooms > 0) {
    tenants = currentTenants.concat([{ available: true }]);
  }

  return (
    <Flex
      margin="0 auto"
      h="150vh"
      w={CONTAINER_WIDTH}
      justifyContent="flex-start"
      placeItems="center"
      direction="column"
    >
      <Flex
        borderBottom="1px solid rgba(255,255,255,0.3)"
        w="100%"
        mb="8"
        justify="space-between"
        position="relative"
        py="5"
      >
        <Heading w="20%" fontSize="2xl">
          Conheça nossas salas
        </Heading>
        <Text
          h="100%"
          _after={{
            content: '""',
            width: '30%',
            height: '3px',
            right: 0,
            top: 0,
            position: 'absolute',
            zIndex: 9,
            background: 'yellow.500',
          }}
        >
          {availableRooms || 'Nenhuma'} {`sala${availableRooms > 1 ? 's' : ''}`}{' '}
          {`disponive${availableRooms > 1 ? 'is' : 'l'}`}
        </Text>
      </Flex>

      <Text
        mb="8"
        textAlign="justify"
        width="60%"
        alignSelf="flex-start"
        fontSize="sm"
        fontFamily="Open Sans"
        lineHeight="6"
      >
        Why do we use it? It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing .
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
