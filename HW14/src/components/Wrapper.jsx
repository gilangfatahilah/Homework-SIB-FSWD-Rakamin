import { VStack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Wrapper(props) {
  return (
    <VStack minH="100vh" minW="100vw">
      <Navbar />
      {props.children}
      <Footer />
    </VStack>
  );
}

export default Wrapper;
