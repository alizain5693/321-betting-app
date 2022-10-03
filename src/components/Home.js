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
  import jwt_decode from "jwt-decode";
import { log } from 'util';

const Home = () => {
    let navigate = useNavigate()
    //load the tokens from local storage and decode them
    let jwks = localStorage.getItem('DegenBetz_JWKS');
    let jwtID = localStorage.getItem('DegenBetz_ID_TOKEN');
    let jwtDecoded = jwt_decode(jwtID);
    //get header and payload
    let header = jwtDecoded.header;
    let payload = jwtDecoded.payload;
    console.log(header);
    console.log(jwtDecoded);
    console.log(jwks);
    // //search the jwks for the key that matches the kid in the jwt
    // let key = jwks.keys.find(key => key.kid === jwtDecoded.header.kid);
    // //convert the key to a pem
    // var jwt = require('jsonwebtoken');
    // var jwkToPem = require('jwk-to-pem');
    // let pem = jwkToPem(key);
    // //verify the jwt
    // let verified = jwt.verify(jwtID, pem);
    // console.log(verified);

async function signOut() {
    try {
        await Auth.signOut();
        navigate("/login");
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
                    <Button onClick = {(e)=>{signOut()}}>Logout</Button>
                </div>
            </nav>
        </section>
        </>
    )
}

export default Home