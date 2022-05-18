import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export default function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex w="100%" as="header" maxWidth={1480} h="20" mx="auto" mt="4" px="6">
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine}></Icon>}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          mt="6"
        ></IconButton>
      )}
      <Logo></Logo>
      {isWideVersion && <SearchBox></SearchBox>}

      <Flex align="center" ml="auto">
        <NotificationsNav></NotificationsNav>
        <Profile showProfileData={isWideVersion}></Profile>
      </Flex>
    </Flex>
  );
}
