import {Image, Box } from "@chakra-ui/react";

export function Logo() {
  return (
    // <Text
    //   fontSize={["2xl", "3xl"]}
    //   fontWeight="bold"
    //   letterSpacing="tight"
    //   w="64"
    //   alignSelf="center"
    // >
    //   Receitas Renata
    //   <Text ml="1" as="span" color="pink.500">
    //     .
    //   </Text>
    // </Text>
    <Box w="64" alignSelf="center">
      <Image src="https://renata.com.br/assets/img/logo-renata.svg" alt="Renata logo"></Image>
    </Box>
    
  );
}
