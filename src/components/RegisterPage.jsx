// src/components/RegisterPage.jsx
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, useToast } from '@chakra-ui/react';

const RegisterPage = () => {
  const toast = useToast();
  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
  });

  const handleSubmit = (values, actions) => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    actions.setSubmitting(false);
  };

  return (
    <Box bg="teal.100" p={8} borderRadius="lg" boxShadow="lg" m={4}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Page Register
      </Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Field as={Input} id="name" name="name" type="text" variant="filled"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Field as={Input} id="email" name="email" type="email" variant="filled"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Field as={Input} id="password" name="password" type="password" variant="filled"/>
              </FormControl>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegisterPage;
