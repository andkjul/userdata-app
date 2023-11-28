// src/components/UsersPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td, Container, Heading } from '@chakra-ui/react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <Container maxW="container.md" centerContent>
      <Heading as="h1" size="xl" textAlign="center" my="4">
        Users
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Password</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.password}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default UsersPage;
