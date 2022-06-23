import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header></Header>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar></SideBar>
        <Box flex="1" borderRadius={8} bg="gray.100" padding="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal" color="gray.800">
              Receitas Publicadas
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="small"
              colorScheme="whiteAlpha"
              background="blue.900"
              _hover={{ bg: "gray.500" }}
              leftIcon={<Icon fontSize="20" as={RiAddLine} />}
            >
              Publicar Nova Receita
            </Button>
          </Flex>
          <Table colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox></Checkbox>
                </Th>
                <Th>Título</Th>
                {isWideVersion && <Th>Status da Publicação</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="whiteAlpha"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Bolo Piscininha de Cenoura</Text>
                    <Text fontWeight="normal" fontSize="sm" color="gray.300">
                    Bolo feito com Mistura para Bolo Renata sabor cenoura, coberto com brigadeiro cremoso.
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td color="#38A169">Published</Td>}
                {isWideVersion && (
                  <Td>
                    {" "}
                    <Button
                      as="a"
                      size="sm"
                      fontSize="small"
                      colorScheme="blue"
                      _hover={{ bg: "gray.500" }}
                      backgroundColor="blue.900"
                      leftIcon={<Icon fontSize="16" as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="whiteAlpha"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Macarrão com molho branco e brócolis</Text>
                    <Text fontWeight="normal" fontSize="sm" color="gray.300">
                    Macarrão Penne RENATA ao molho branco à base de Farinha de Trigo RENATA e Brócolis.
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td color="#DD6B20">Draft</Td>}
                {isWideVersion && (
                  <Td>
                    {" "}
                    <Button
                      as="a"
                      size="sm"
                      fontSize="small"
                      colorScheme="blue"
                      backgroundColor="blue.900"
                      leftIcon={<Icon fontSize="16" as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>
          <Pagination></Pagination>
        </Box>
      </Flex>
    </Box>
  );
}
