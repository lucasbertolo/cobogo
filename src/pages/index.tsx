import { Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import Home from '../clusters/Home';
import Tenants from '../clusters/Tenants';
import Gallery from '../clusters/Gallery';
import Contact from '../clusters/Contact';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <Flex maxW="100vw" minH="300vh" direction="column" position="relative">
      <Header />

      <Home />

      <Gallery />

      <Tenants />

      <Contact />

      <Footer />
    </Flex>
  );
}
