import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"
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
  } from '@chakra-ui/react';

  import { Auth } from 'aws-amplify';

const Home = () => {
    let navigate = useNavigate()

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

    return (
        <>
        <section className = "hero">
            <nav>
                <div>
                    <h2>Welcome</h2>
                    <Button onClick = {(e)=>{navigate("/login")}}>Logout</Button>
                </div>
            </nav>
        </section>
        </>
    )
}

export default Home