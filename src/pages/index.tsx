import { Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import Home from '../clusters/Home';
import Tenants from '../clusters/Tenants';

export default function Index() {
  return (
    <Flex maxW="100vw" h="300vh" direction="column">
      <Header />

      <Home />

      <Tenants />
    </Flex>
  );
}
