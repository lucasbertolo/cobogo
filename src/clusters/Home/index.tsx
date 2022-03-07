import { Flex, useMediaQuery } from "@chakra-ui/react";
import Description from "./Description";
import MainImage from "./MainImage";

export default function Home() {
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");

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
      {isLargerThan720 && <MainImage />}
    </Flex>
  );
}
