//create a component named team that takes in following inputs:
//teamname
//teamcity

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

export default function Team(props){
    //make url
    let url = "https://nba-team-logos.s3.amazonaws.com/" + props.teamName + ".svg";
    url = url.toLowerCase();
    return (
        <>
        {/* <Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
    w="xs"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
    overflow="hidden"
    mx="auto"
  >
    <Image
      w="full"
      h={56}
      fit="cover"
      src={url}
      alt="avatar"
    />

    <Box py={5} textAlign="center">
      <Link
        display="block"
        fontSize="2xl"
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
        {props.teamName}
      </Link>
      <span
        fontSize="sm"
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        {props.teamCity}
      </span>
    </Box>
  </Box>
</Flex>;

        </> */}
        <Box
    w="xs"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
    overflow="hidden"
    mx="auto"
  >
    <Image
      w="full"
      h={56}
      fit="cover"
      src={url}
      alt="avatar"
    />

    <Box py={5} textAlign="center">
      <Link
        display="block"
        fontSize="2xl"
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
        {props.teamName}
      </Link>
      <span
        fontSize="sm"
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        {props.teamCity}
        <br></br>
        {props.team.wins}-{props.team.losses}
      </span>
    </Box>
  </Box>
        </>
    )
}