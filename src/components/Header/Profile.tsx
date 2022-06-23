import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Administrador Renata</Text>
          <Text color="gray.300" fontSize="small">
            vinicios@renata.com.br
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Renata"
        src="https://renata.com.br/assets/img/logo-renata.svg"
      ></Avatar>
    </Flex>
  );
}
