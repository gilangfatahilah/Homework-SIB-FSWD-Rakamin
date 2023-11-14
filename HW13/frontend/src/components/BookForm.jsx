import {
  Button,
  Heading,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Image,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createBook, editBook } from "../modules/fetch";

export default function BookForm({ bookData }) {
  const toast = useToast();
  const [selectedImage, setSelectedImage] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!selectedImage) {
      toast({
        title: "Error",
        description: "Please select image",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    const formData = new FormData(event.target);
    if (bookData) {
      try {
        await editBook(
          bookData.id,
          formData.get("title"),
          formData.get("author"),
          formData.get("publisher"),
          parseInt(formData.get("year")),
          parseInt(formData.get("pages"))
        );
        toast({
          title: "Success",
          description: "Book edited successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: error.response.data.message || "Something went wrong",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
      return;
    }
    try {
      await createBook(formData);
      event.target.reset();
      toast({
        title: "Success",
        description: "Book created successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setSelectedImage("");
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data.message || "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    if (bookData?.image) {
      setSelectedImage(`http://localhost:8000/${bookData?.image}`);
    }
  }, [bookData]);

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} mt={12}>
        <Heading as="h1" marginBottom={4} size="lg">
          {bookData ? "Edit Data Book" : "Create New Book"}
        </Heading>
        <Flex
          gap={16}
          p={12}
          justifyContent="space-between"
          borderWidth="2px"
          borderRadius="xl"
          borderColor="#0f0f0f"
        >
          <Box>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                borderColor="#0f0f0f"
                name="title"
                required
                defaultValue={bookData?.title}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Author</FormLabel>
              <Input
                borderColor="#0f0f0f"
                name="author"
                required
                defaultValue={bookData?.author}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Publisher</FormLabel>
              <Input
                borderColor="#0f0f0f"
                name="publisher"
                required
                defaultValue={bookData?.publisher}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Year</FormLabel>
              <Input
                borderColor="#0f0f0f"
                name="year"
                type="number"
                required
                defaultValue={bookData?.year}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Pages</FormLabel>
              <Input
                borderColor="#0f0f0f"
                name="pages"
                type="number"
                required
                defaultValue={bookData?.pages}
              />
            </FormControl>
          </Box>

          <Box>
            {selectedImage && (
              <Image w={64} src={selectedImage} alt="Selected Image" />
            )}
            {!bookData?.image && (
              <FormControl>
                <FormLabel>Image</FormLabel>
                <Input
                  borderColor="#0f0f0f"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setSelectedImage(URL.createObjectURL(file));
                  }}
                />
              </FormControl>
            )}
          </Box>
        </Flex>

        <Flex gap={6}>
          <Button
            type="submit"
            color="#fff"
            colorScheme="#fff"
            backgroundColor="#0f0f0f"
          >
            Submit
          </Button>

          <Link to={"/"}>
            <Button
              variant="outline"
              backgroundColor="#FAF6F0"
              color="#0f0f0f"
              colorScheme="#0f0f0f"
            >
              Home
            </Button>
          </Link>
        </Flex>
      </VStack>
    </form>
  );
}
