import { Flex, Box } from "@chakra-ui/react";
import Description from "./Description";
import MainImage from "./MainImage";

export default function Home() {
  return (
    <Flex
      margin="0 auto"
      h={["80vh", "100vh"]}
      w="100%"
      justifyContent="space-between"
      placeItems="center"
      direction="row"
    >
      <Description />
      <MainImage />
    </Flex>
  );
}
