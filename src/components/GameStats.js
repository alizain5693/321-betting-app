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
    Image,
    span,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import "./Home.css"
import Team from "./Team" 
  

  export default function GameStats () {
    let navigate = useNavigate()
    const location = useLocation()
    console.log(location.state.game)
    return (
        <>
        <section className='hero'>
        <nav>
            <div>
                <h2>Current game stats for {location.state.game.homeTeam.teamName} vs {location.state.game.awayTeam.teamName}</h2>
                <Button onClick = {(e)=>{navigate("/home")}}>Back</Button>
            </div>
        </nav>
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col">
                <br></br>
                <Team teamName = {location.state.game.homeTeam.teamName} teamCity = {location.state.game.homeTeam.teamCity} team = {location.state.game.homeTeam} />
                </div>
                <div class="col">
                
                <Heading paddingTop={150} as="h4" size="lg" fontWeight="bold" color="gray.900" _dark={{ color: "gray.100" }} align="center">Points Per period</Heading>
                </div>
                <div class="col">
                <br></br>
                <Team teamName = {location.state.game.awayTeam.teamName} teamCity = {location.state.game.awayTeam.teamCity} team = {location.state.game.awayTeam} />
                </div>
            </div>
            <br></br>
            <br></br>
            <div class="row align-items-center">
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.homeTeam.periods[0].score}</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">Period 1</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.awayTeam.periods[0].score}</Heading>
                </div>
            </div>
            <br></br>
            <br></br>
            <div class="row align-items-end">
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.homeTeam.periods[1].score}</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">Period 2</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.awayTeam.periods[1].score}</Heading>
                </div>
            </div>
            <br></br>
            <br></br>
            <div class="row align-items-end">
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.homeTeam.periods[2].score}</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">Period 3</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.awayTeam.periods[2].score}</Heading>
                </div>
            </div>
            <br></br>
            <br></br>
            <div class="row align-items-end">
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.homeTeam.periods[3].score}</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">Period 4</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.awayTeam.periods[3].score}</Heading>
                </div>
            </div>
            </div>
        




            <div class="container text-center">
            <div class="row align-items-start">
                <div class="col">
                </div>
                <div class="col">
                <Heading paddingTop={150} as="h4" size="lg" fontWeight="bold" color="gray.900" _dark={{ color: "gray.100" }} align="center">Game Leaders</Heading>
                </div>
                <div class="col">
                </div>
            </div>
            <br></br>
            <br></br>
            <div class="row align-items-center">
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.gameLeaders.homeLeaders.name} #{location.state.game.gameLeaders.homeLeaders.jerseyNum}</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">Name</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.gameLeaders.awayLeaders.name} #{location.state.game.gameLeaders.awayLeaders.jerseyNum}</Heading>
                </div>
            </div>
            <br></br>
            <br></br>
            <div class="row align-items-center">
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.gameLeaders.homeLeaders.position}</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">Position</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.gameLeaders.awayLeaders.position}</Heading>
                </div>
            </div>
            <br></br>
            <br></br>
            <div class="row align-items-center">
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.gameLeaders.homeLeaders.points}</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">Points</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.gameLeaders.awayLeaders.points}</Heading>
                </div>
            </div>
            <br></br>
            <br></br>
            <div class="row align-items-center">
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.gameLeaders.homeLeaders.rebounds}</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">Rebounds</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.gameLeaders.awayLeaders.rebounds}</Heading>
                </div>
            </div>
            <br></br>
            <br></br>
            <div class="row align-items-center">
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.gameLeaders.homeLeaders.assists}</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">Assists</Heading>
                </div>
                <div class="col">
                <Heading as="h4" size="md" align="center">{location.state.game.gameLeaders.awayLeaders.assists}</Heading>
                </div>
            </div>
            <br></br>
            <br></br>
            </div>











        </section>
        
        </>
       

       
        
    )
    
  }