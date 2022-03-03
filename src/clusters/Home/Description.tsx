import { Box, Flex, Text, VStack, Image } from "@chakra-ui/react";

export default function Description() {
  return (
    <Flex mt="20" maxW="40%" zIndex={2}>
      <VStack spacing="4">
        <Image src="./images/logo.png" alt="Logo Espaço Cobogó" fit="cover" />

        <Box pl="6">
          <Text as="h3" fontSize={["smaller", "sm"]}>
            O nosso espaço é tranquilo, agradável e muito charmoso. Aqui você
            encontra diferentes serviços com profissionais dedicados para te
            atender. Entre em contato e venha conhecer!
          </Text>

          <Text as="h4" fontSize="xs" width="100%" pt="4">
            * consulte a disponibilidade das salas para locação
          </Text>
        </Box>
      </VStack>
    </Flex>
  );
}
