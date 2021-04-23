import { Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import Home from '../components/Home';
import { useEffect } from 'react';

export default function Index() {
  return (
    <Flex w="100vw" h="300vh" direction="column">
      <Header />

      <Home />
    </Flex>
  );
}
