import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      alignSelf="center"
    >
      dashgo
      <Text ml="1" as="span" color="pink.500">
        .
      </Text>
    </Text>
  );
}
