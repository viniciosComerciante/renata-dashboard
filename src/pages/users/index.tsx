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
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import { SideBar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header></Header>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar></SideBar>
        <Box flex="1" borderRadius={8} bg="gray.800" padding="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="small"
              colorScheme="pink"
              leftIcon={<Icon fontSize="20" as={RiAddLine} />}
            >
              Criar novo usuário
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vinicios Oliveira</Text>
                    <Text fontWeight="normal" fontSize="sm" color="gray.300">
                      vinicompif@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  {" "}
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon fontSize="16" as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vinicios Oliveira</Text>
                    <Text fontWeight="normal" fontSize="sm" color="gray.300">
                      vinicompif@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  {" "}
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon fontSize="16" as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vinicios Oliveira</Text>
                    <Text fontWeight="normal" fontSize="sm" color="gray.300">
                      vinicompif@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  {" "}
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon fontSize="16" as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vinicios Oliveira</Text>
                    <Text fontWeight="normal" fontSize="sm" color="gray.300">
                      vinicompif@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  {" "}
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon fontSize="16" as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vinicios Oliveira</Text>
                    <Text fontWeight="normal" fontSize="sm" color="gray.300">
                      vinicompif@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  {" "}
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon fontSize="16" as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>{" "}
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vinicios Oliveira</Text>
                    <Text fontWeight="normal" fontSize="sm" color="gray.300">
                      vinicompif@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  {" "}
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon fontSize="16" as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>{" "}
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vinicios Oliveira</Text>
                    <Text fontWeight="normal" fontSize="sm" color="gray.300">
                      vinicompif@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  {" "}
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon fontSize="16" as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}