import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import{ useState } from 'react';
import { Auth } from 'aws-amplify'


  
  export default function SimpleCard() {
    //HANDLE SUBMISSIONS AND SIGNINS
    //vars to store
    let username = "";
    let password = "";
    const [loginSuccess, setLoginSuccess] = useState(true);

    //using references to grab the form data
    
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();

    async function signIn() {
      try {
        const user = await Auth.signIn(username, password);
        // let jwks = await fetch('https://cognito-idp.us-east-1.amazonaws.com/us-east-1_aaZ2o3X55/.well-known/jwks.json');
        let jwks = require('../JWKS.json');
        jwks = JSON.stringify(jwks);
        localStorage.setItem('DegenBetz_ID_TOKEN', user.signInUserSession.idToken.jwtToken);
        localStorage.setItem('DegenBetz_REFRESH_TOKEN', user.signInUserSession.refreshToken.jwtToken);
        localStorage.setItem('DegenBetz_ACCESS_TOKEN', user.signInUserSession.accessToken.jwtToken);
        localStorage.setItem('DegenBetz_JWKS', jwks);
        console.log(user);
        setLoginSuccess(true);
        navigate("/home");
    } catch (error) {
        console.log('error logging in:', error);
        setLoginSuccess(false);
    }
    }
  
    const handleSubmit = () => {
      username = usernameRef.current.value;
      password = passwordRef.current.value;
      signIn();
    };



    let navigate = useNavigate()
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" ref={usernameRef}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" ref={passwordRef}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Link color={'green.400'} onClick = {(e)=>{navigate("/register")}}>Create account</Link>
                </Stack>
                <Button
                  onClick={handleSubmit}
                  bg={'green.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Sign in
                </Button>
                { loginSuccess === false ? (
                  <>
                  <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Unable to Login!</AlertTitle>
  <AlertDescription>Please check your username and password is correct!</AlertDescription>
</Alert>
                  </>
                ) : (
                  <>
                  </>
                )}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }