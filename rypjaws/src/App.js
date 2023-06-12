import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
// import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Footer from "./components/Footer"
import InstallationSteps from './components/Installation';
import { BrowserRouter} from "react-router-dom";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Navbar/>
      <Hero></Hero>
      <Features></Features>
      <InstallationSteps></InstallationSteps>
      <Footer></Footer>
      </BrowserRouter>
      {/* <Footer/> */}
    </ChakraProvider>
  );
}

export default App;
