import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="whiteAlpha"
        _hover={{ bg: "gray.500" }}
        disabled
        _disabled={{
          bg: "blue.900",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.200"
      _hover={{ bg: "gray.500" }}
    >
      {number}
    </Button>
  );
}
