import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
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
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import Link from "next/link";
import { deleteBook, getBookDetailById } from "@/modules/fetch";
import { useAuth } from "@/modules/context/authContext";
import { prisma } from "@/utils/prisma";
import Image from "next/image";

export default function BookDetails({ book }) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const handleDeleteBook = async () => {
    try {
      await deleteBook(router.query.id);
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <Flex
        my="6"
        p={6}
        borderWidth="1px"
        borderRadius="lg"
        borderColor="#0f0f0f"
      >
        <Box w="200px">
          <Image
            src={`/${book.image.substring(1)}`}
            alt={book.title}
            width={300}
            height={150}
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
            <Button
              backgroundColor="#0f0f0f"
              color="#FAF6F0"
              colorScheme="#FAF6F0"
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </Button>

            {isLoggedIn && (
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
                <Link href={`/edit/${router.query.id}`}>
                  <Button>Edit</Button>
                </Link>
              </HStack>
            )}
          </Flex>
        </Box>
      </Flex>
    </Wrapper>
  );
}

export async function getStaticPaths() {
  // get all books id
  const books = await prisma.book.findMany({
    select: {
      id: true,
    },
  });
  const paths = books.map((book) => ({
    params: { id: book.id.toString() },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  try {
    const book = await prisma.book.findUnique({
      where: { id: Number(context.params.id) },
    });
    return {
      props: {
        book,
      },
      revalidate: 10,
    };
  } catch (e) {
    console.log(e);
    return {
      props: {},
    };
  }
}
