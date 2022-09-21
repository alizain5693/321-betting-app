import { BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from "react"
import Login from "./components/Login"
import Hero from "./components/Hero"
import Register from "./components/Register"
import Home from "./components/Home"

function App() {

  

  

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path = "/" element = {<Hero/>}></Route>
          <Route path = "/login" element = {<Login/>}></Route>
          <Route path = "/register" element = {<Register/>}></Route>
          <Route path = "/home" element = {<Home/>}></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
