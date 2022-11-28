import { useState, useEffect } from 'react'
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
const Rebound = () => {
    let navigate = useNavigate()
    async function signOut() {
        try {
            localStorage.removeItem('DegenBetz_JWKS');
            localStorage.removeItem('DegenBetz_ID_TOKEN');
            localStorage.removeItem('DegenBetz_ACCESS_TOKEN');
            localStorage.removeItem('DegenBetz_REFRESH_TOKEN');
            await Auth.signOut();
            navigate("/login");
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    return (
        <>
        <section className='hero'>
        <nav>
                <div>
                    <h2>Welcome</h2>
                    <Button onClick = {(e)=>{signOut()}}>Logout</Button>
                </div>
                <div className = "leaders">
                <Button onClick = {(e)=>{navigate('/home')}}>Scoreboard</Button>
                <Button onClick = {(e)=>{navigate('/point')}}>Point Leaders</Button>
                <Button onClick = {(e)=>{navigate('/assist')}}>Assist Leaders</Button>
                <Button onClick = {(e)=>{navigate('/rebound')}}>Rebound Leaders</Button>
                </div>
            </nav>
            </section>
        </>
    )
}

export default Rebound