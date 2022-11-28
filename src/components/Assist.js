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
const Assist = () => {
    let navigate = useNavigate()
    const [leaders,setLeaders] = useState([])

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

    useEffect (() => {
        fetchData()
        console.log(leaders)
    },[])

    const fetchData = async () => {
        const axios = require('axios');
        const url = 'https://fidr2z7ssrfjfu67yqyqks6zse0sqabn.lambda-url.us-east-1.on.aws/';
        axios.get(url)
            .then(function (response) {
                setLeaders(response.data.rowSet)
            }
            )
            .catch(function (error) {
                console.log(error);
            }
            );
            
    };
    

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

export default Assist