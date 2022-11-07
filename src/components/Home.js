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
  import jwt_decode from "jwt-decode";
  import { CognitoJwtVerifier } from "aws-jwt-verify";
import { log } from 'util';






const Home = () => {
//is user verified
const [isVerified, setIsVerified] = useState(false);
const [schedule,setSchedule] = useState([])
let navigate = useNavigate();
//Async function for user verification through jwt and cognito
async function VerifyUser() {

    try {
        let jwks = localStorage.getItem('DegenBetz_JWKS');
        let jwtID = localStorage.getItem('DegenBetz_ID_TOKEN');
        let jwtAccess = localStorage.getItem('DegenBetz_ACCESS_TOKEN');
        let jwtAccessDecoded = jwt_decode(jwtAccess);
        let jwtDecoded = jwt_decode(jwtID);
        let jwtDecodedHeader = jwt_decode(jwtID, {header: true});
        console.log("jwtDecodedHeader\n" + jwtDecodedHeader);
        console.log("jwtDecoded\n" + jwtDecoded);
        console.log("jwks\n" + jwks);

        //get local key id 
        let localKid = jwtDecodedHeader.kid;
        //search jwks for the localKid
        let jwksParsed = JSON.parse(jwks);
        let jwksKeys = jwksParsed.keys;
        let matchingKey = jwksKeys.find(key => key.kid === localKid);
        console.log("matchingKey\n" + matchingKey);

        //get aud
        let aud = jwtDecoded.aud;
        console.log("aud\n" + aud);
        
        // Verifier that expects valid access tokens:
        const verifier = CognitoJwtVerifier.create({
            userPoolId: "us-east-1_aaZ2o3X55",
            tokenUse: "access",
            clientId: jwtAccessDecoded.client_id,
        });
        //verify the token
        const payload = await verifier.verify(jwtAccess);
        //stringify the payload
        let payloadString = JSON.stringify(payload);
        console.log("IT IS VERIFIED -- payload\n" + payloadString);        

        //check that the token is not expired
        if(payload.exp > Date.now() / 1000){
            console.log("token is not expired");
                //Make sure aud in id token matches client id in access token
                if(aud == jwtAccessDecoded.client_id){
                console.log("aud matches client id");
                    //check that the iss matches the user pool
                    if(payload.iss == "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_aaZ2o3X55"){
                        //check that claim is either id or access
                        if(payload.token_use == "id" || payload.token_use == "access"){
                            console.log("token is valid ID or Access token");
                            // return true;
                            setIsVerified(true);
                        }
                }
            }
        
        
        
    } 
}catch (error) {
        console.log("error\n" + error);
        // return false;
        setIsVerified(false);
        // navigate("/login");
    }

}
    //store verifyUser in a variable
    // isVerified = VerifyUser();
    VerifyUser();
   
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

// if(isVerified == true){
//     return (
//         <>
//         <section className = "hero">
//             <nav>
//                 <div>
//                     <h2>Welcome</h2>
//                     <Button onClick = {(e)=>{signOut()}}>Logout</Button>
//                 </div>
//             </nav>
//         </section>
//         </>
//     )
// }
// else{
//     navigate("/login");
//     return (
//         <>
//         <section className = "hero">
//             <nav>
//                 <div>
//                     <h2>YOU NEED TO LOGIN MY FRIEND...</h2>
//                     <Button onClick = {(e)=>navigate("/login")}>Go to Login</Button>
//                 </div>
//             </nav>
//         </section>
//         </>
//     )
// }
    useEffect (() => {
        fetchData()
    })

    const fetchData = async () => {
        //get req this url using axios
        //url: https://x2xgysiaba64ej7uwyejehjtoq0gpzjz.lambda-url.us-east-1.on.aws/
        const axios = require('axios');
        const url = 'https://x2xgysiaba64ej7uwyejehjtoq0gpzjz.lambda-url.us-east-1.on.aws/';
        axios.get(url)
            .then(function (response) {
                console.log(response.data);
                setSchedule(response.data.JSON)
            }
            )
            .catch(function (error) {
                console.log(error);
            }
            );
            
    };

    return(
        <>
        { isVerified === true ? (
            <>
        <section className = "hero">
            <nav>
                <div>
                    <h2>Welcome</h2>
                    <Button onClick = {(e)=>{signOut()}}>Logout</Button>
                </div>
            </nav>
            <div>
                <h1>Today's games</h1>
                {
                    schedule.scoreboard.games.map((game) => {
                        
                    }) 
                }
            </div>
        </section>
          </>
        ) : (
            <>
                <section className = "hero">
            <nav>
                <div>
                    <h2>YOU NEED TO LOGIN MY FRIEND...</h2>
                    <Button onClick = {(e)=>navigate("/login")}>Go to Login</Button>
                </div>
            </nav>
        </section>
                  </>
        )}
        </>
    )


}

export default Home