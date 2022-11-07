//import team component
import Team from './Team';
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
export default function Game(props){
    //create a div that returns team1 vs team2 using team compnents
        
    return(
        <><Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="left"
        justifyContent="left"
      >
            <Team teamName = {props.teamName1} teamCity = {props.teamCity1} />
            {/* make strong large font heading that says VS */}
            <div>            
                <Heading as="h4" size="lg" fontWeight="bold" color="gray.900" _dark={{ color: "gray.100" }} align="center">VS</Heading>
                <br></br>
                <Heading as="h4" size="lg" fontWeight="bold" color="gray.900" _dark={{ color: "gray.100" }} align="center">{props.team1score} - {props.team2score}</Heading>
            </div>
            <Team teamName = {props.teamName2} teamCity = {props.teamCity2} />
        
        </Flex>
        </>
    )
}