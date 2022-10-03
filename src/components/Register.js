import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom';
  import React from 'react';
  import { Auth } from 'aws-amplify'
  


  export default function SignupCard() {
    //declarations
    const [showPassword, setShowPassword] = useState(false);
    let navigate = useNavigate()

    //vars to store
    let email = "";
    let password = "";
    let name = "";
    let username = "";

    //using references to grab the form data
    
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const firstNameRef = React.useRef();
    const lastNameRef = React.useRef();

    async function signUp() {
      try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
              email,
              name
            },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: false,
            }
        });
        console.log(user);
        navigate("/login");
        return (
          <Alert status="success">
            <AlertIcon />
            <AlertTitle mr={2}>Success!</AlertTitle>
            <AlertDescription>Account created successfully!</AlertDescription>
          </Alert>
        )
    } catch (error) {
        console.log('error signing up:', error);
        return (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Error!</AlertTitle>
            <AlertDescription>Account creation failed!: {error}</AlertDescription>
          </Alert>
        )
    }
    }
  
    const handleSubmit = () => {
      email = emailRef.current.value;
      password = passwordRef.current.value;
      name = firstNameRef.current.value +" "+ lastNameRef.current.value;
      username = email;
      signUp();

    };

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" ref={firstNameRef}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" ref={lastNameRef}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" ref={emailRef}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} ref={passwordRef}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleSubmit}
                  loadingText="Submitting"
                  size="lg"
                  bg={'green.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'green.400'} onClick = {(e)=> {navigate("/login")}}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )

  }
