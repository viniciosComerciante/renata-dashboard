import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export default function Header() {
  return (
    <Flex w="100%" as="header" maxWidth={1480} h="20" mx="auto" mt="4" px="6">
      <Logo></Logo>
      <SearchBox></SearchBox>
      <Flex align="center" ml="auto">
        <NotificationsNav></NotificationsNav>
        <Profile></Profile>
      </Flex>
    </Flex>
  );
}
