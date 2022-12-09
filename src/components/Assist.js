import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"
import assist from "./assist.json"
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
        
        //if(leaders.length == 0) {
        //etLeaders(assist)
        //}
        console.log(leaders)
    },[])

    const fetchData = async () => {
        const axios = require('axios');
        const url = 'https://fidr2z7ssrfjfu67yqyqks6zse0sqabn.lambda-url.us-east-1.on.aws/';
        axios.get(url)
            .then(function (response) {
                setLeaders(response.data.resultSet.rowSet)
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
                <h2>Assist Leaders (avg per game)</h2>
                    <Button onClick = {(e)=>{signOut()}}>Logout</Button>
                </div>
                <div className = "leaders">
                <Button onClick = {(e)=>{navigate('/home')}}>Scoreboard</Button>
                <Button onClick = {(e)=>{navigate('/point')}}>Point Leaders</Button>
                <Button onClick = {(e)=>{navigate('/assist')}}>Assist Leaders</Button>
                <Button onClick = {(e)=>{navigate('/rebound')}}>Rebound Leaders</Button>
                </div>
            </nav>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Rank</th> 
                    <th scope="col">Player</th>
                    <th scope="col">Team</th>
                    <th scope="col">GP</th>
                    <th scope="col">AST</th>
                    <th scope="col">PTS</th>
                    <th scope="col">REB</th>
                    <th scope="col">OREB</th>
                    <th scope="col">DREB</th>
                    <th scope="col">FG %</th>
                    <th scope="col">FG3 %</th>
                    <th scope="col">FT %</th>
                    <th scope="col">STL</th>
                    <th scope="col">BLK</th>
                    <th scope="col">TOV</th>
                    </tr>
                </thead>
                <tbody>
                    {leaders.map((stat) => (
                       <tr>
                        <th>{stat[1]}</th>
                        <td>{stat[2]}</td>
                        <td>{stat[4]}</td>
                        <td>{stat[5]}</td>
                        <td>{stat[19]}</td>
                        <td>{stat[23]}</td>
                        <td>{stat[18]}</td>
                        <td>{stat[16]}</td>
                        <td>{stat[17]}</td>
                        <td>{Math.round(stat[9] * 100)}</td>
                        <td>{Math.round(stat[12] * 100)}</td>
                        <td>{Math.round(stat[15] * 100)}</td>
                        <td>{stat[20]}</td>
                        <td>{stat[21]}</td>
                        <td>{stat[22]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
        
        </>
    )
}

export default Assist