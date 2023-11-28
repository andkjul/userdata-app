import { Routes, Route, Link } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import RegisterPage from './components/RegisterPage';
import { Box, Button, Flex } from '@chakra-ui/react';

const App = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Box as="nav">
        <Link to="/"><Button colorScheme="teal" variant="ghost">Users</Button></Link>
        <Link to="/register"><Button colorScheme="teal" variant="ghost">Register</Button></Link>
      </Box>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Flex>
  );
};

export default App;
