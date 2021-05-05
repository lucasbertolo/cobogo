import { Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import Header from '../components/Header';
import Home from '../clusters/Home';
import Tenants from '../clusters/Tenants';
import Gallery from '../clusters/Gallery';
import Contact from '../clusters/Contact';
import Footer from '../components/Footer';
import SEO from '../components/Seo';

export default function Index() {
  const width = useBreakpointValue({ base: '80%', md: '70%' });

  return (
    <Flex maxW="100vw" minH="300vh">
      <Flex width={width} direction="column" margin="auto" position="relative">
        <SEO
          title="Espaço Cobogó | Salas comerciais | Piracicaba, SP"
          description="Espaço de salas comerciais no bairro Alto de Piracicaba, SP"
        />

        {/* <Header /> */}

        <Home />

        <Gallery />

        <Tenants />

        <Contact />

        <Footer />
      </Flex>
    </Flex>
  );
}
