import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightAddon,
  Link,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>YouTube</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.xl" marginTop={4}>
        <Flex as="header" justifyContent="space-between">
          <Image
            src="/assets/youtube-svgrepo-com.svg"
            width={50}
            height={50}
            alt="youtube logo"
          />

          <Flex>
            <FormControl>
              <InputGroup>
                <Input placeholder="search your video" />
                <InputRightAddon>
                  <Button>Search</Button>
                </InputRightAddon>
              </InputGroup>
            </FormControl>
          </Flex>

          <Flex gap={2}>
            <Link color="red.500">Create account</Link>
            <Text>or</Text>
            <Link color="red.500">or Sign in</Link>
          </Flex>
        </Flex>
        <hr />

        <Grid
          h="400px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
        >
          <GridItem colSpan={2} background="yellow">
            <h1>item 1</h1>
          </GridItem>

          <GridItem background="red">
            <h1>item 2</h1>
          </GridItem>
        </Grid>

        <SimpleGrid columns={4} spacing={2} marginTop={4}>
          <Box background="black">asd</Box>
          <Box background="red">asd</Box>
          <Box background="blue">asd</Box>
          <Box background="black">asd</Box>

          <Box background="red">asd</Box>
          <Box background="black">asd</Box>
          <Box background="yellow">asd</Box>
          <Box background="blue">asd</Box>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Home;
