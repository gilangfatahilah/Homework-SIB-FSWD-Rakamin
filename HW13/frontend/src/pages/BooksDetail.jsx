import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteBook, getBookDetailById } from "../modules/fetch";

export default function BookDetails() {
  const [book, setBook] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  const handleDeleteBook = async () => {
    try {
      await deleteBook(id);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box>
      {isLoading ? (
        <Skeleton height="300px" my="6" />
      ) : (
        <Flex
          my="6"
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          borderColor="#0f0f0f"
        >
          <Box w="200px">
            <Image
              src={`http://localhost:8000/${book.image}`}
              alt={book.title}
            />
          </Box>
          <Box ml="8">
            <Heading as="h1" marginBottom={4} size="lg">
              Book Details
            </Heading>
            <Text fontSize="xl" fontWeight="semibold" color="0f0f0f">
              Title : {book.title}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="0f0f0f">
              Author : {book.author}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="0f0f0f">
              Publisher : {book.publisher}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="0f0f0f">
              Year : {book.year}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="0f0f0f" mb="4">
              Total Pages : {book.pages} pages
            </Text>
            <Flex gap={3}>
              <Link to={"/"}>
                <Button
                  backgroundColor="#0f0f0f"
                  color="#FAF6F0"
                  colorScheme="#FAF6F0"
                >
                  Home
                </Button>
              </Link>

              {localStorage.getItem("token") && (
                <HStack>
                  <Popover>
                    <PopoverTrigger>
                      <Button colorScheme="red">Delete</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        Are you sure you want to delete this book?
                      </PopoverBody>
                      <Button onClick={handleDeleteBook} colorScheme="red">
                        Delete
                      </Button>
                    </PopoverContent>
                  </Popover>
                  <Link to={`/editbook/${id}`}>
                    <Button colorScheme="messenger">Edit</Button>
                  </Link>
                </HStack>
              )}
            </Flex>
          </Box>
        </Flex>
      )}
    </Box>
  );
}
