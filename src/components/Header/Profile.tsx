import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Vinicios Oliveira</Text>
        <Text color="gray.300" fontSize="small">
          vinicompif@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="vinicios oliveira"
        src="https://github.com/viniciosComerciante.png"
      ></Avatar>
    </Flex>
  );
}
