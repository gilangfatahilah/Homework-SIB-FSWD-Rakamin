import { useAuth } from "@/modules/context/authContext";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";
import { loginUser } from "../modules/fetch";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <Flex
      w="full"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="#FAF6F0"
      backgroundColor="#0f0f0f"
    >
      <Link href="/">
        <Flex align="center" mr={5} cursor="pointer">
          <Image src="/Gremaida.png" alt="logo" width={80} height={50} />
        </Flex>
      </Link>
      <HStack>
        {isLoggedIn && (
          <Link href="/newbook">
            <Button
              backgroundColor="#FAF6F0"
              color="#0f0f0f"
              colorScheme="#0f0f0f"
              variant="solid"
              marginX={4}
            >
              Create New Book
            </Button>
          </Link>
        )}
        {!isLoggedIn ? (
          <Button onClick={onOpen} colorScheme="#fff" variant="outline">
            Login
          </Button>
        ) : (
          <Button
            borderColor="#fff"
            colorScheme="#0f0f0f"
            variant="outline"
            onClick={() => {
              Cookies.remove("isLoggedIn");
              setIsLoggedIn(false);
            }}
          >
            Logout
          </Button>
        )}
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <form
          id="login-form"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              await loginUser(e.target.email.value, e.target.password.value);
              Cookies.set("isLoggedIn", true);
              setIsLoggedIn(true);
              onClose();
            } catch (err) {
              toast({
                title: "Error",
                description: err.message,
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            }
          }}
        >
          <ModalOverlay />
          <ModalContent backgroundColor="#F4EAE0">
            <ModalHeader fontWeight="bold">Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </FormControl>
              </VStack>
            </ModalBody>
            <ModalFooter gap={7}>
              <Button
                type="submit"
                form="login-form"
                colorScheme="#fff"
                backgroundColor="#0f0f0f"
                color="#fff"
                paddingX={12}
              >
                Login
              </Button>
              <Link href="/Register" onClick={onClose}>
                <Button colorScheme="Gray" variant="ghost">
                  Doesn&apos;t Have Account? Click here
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </Flex>
  );
};

export default Navbar;
