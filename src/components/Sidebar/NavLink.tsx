import { Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

interface NavLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children }: NavLinkProps) {
  return (
    <Link display="flex">
      <Icon as={icon} fontSize="20"></Icon>
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
