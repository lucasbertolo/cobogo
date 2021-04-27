import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Card from './Card';

const currentTenants = [
  {
    name: 'Lais M. Salvador',
    srcImg:
      'http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/01/Best-Profile-Images-HD-Download-300x214.jpg',
    job: 'Arquiteta, Urbanista e design de interiores',
    email: 'lms-arquitetura@gmail.com',
  },
  {
    name: 'Lais M. Salvador',
    srcImg:
      'http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/01/Best-Profile-Images-HD-Download-300x214.jpg',
    job: 'Arquiteta, Urbanista e design de interiores',
    email: 'lms-arquitetura@gmail.com',
  },
  {
    name: 'Lais M. Salvador',
    srcImg:
      'http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/01/Best-Profile-Images-HD-Download-300x214.jpg',
    job: 'Arquiteta, Urbanista e design de interiores',
    email: 'lms-arquitetura@gmail.com',
  },
  {
    name: 'Lais M. Salvador',
    srcImg:
      'http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/01/Best-Profile-Images-HD-Download-300x214.jpg',
    job: 'Arquiteta, Urbanista e design de interiores',
    email: 'lms-arquitetura@gmail.com',
  },
];

export default function Tenants() {
  return (
    <Flex
      margin="0 auto"
      h="100vh"
      w="75%"
      justifyContent="flex-start"
      placeItems="center"
      direction="column"
    >
      <Heading>Hey ther</Heading>

      <SimpleGrid
        minChildWidth="200px"
        spacing="4"
        paddingY="10"
        w="100%"
        bg="red"
      >
        {currentTenants.map((tenant, index) => (
          <Card {...tenant} numberRoom={index + 1} key={tenant.name} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
