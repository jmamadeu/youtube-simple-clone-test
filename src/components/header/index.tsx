import {
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightAddon,
  Link,
  Text
} from "@chakra-ui/react";

import Image from "next/image";
import NextLink from "next/link";

export const Header = () => (
  <Flex as="header" justifyContent="space-between" alignItems="center">
    <NextLink href="/">
      <Link>
        <Image
          src="/assets/youtube-svgrepo-com.svg"
          width={50}
          height={50}
          alt="youtube logo"
        />
      </Link>
    </NextLink>

    <Flex>
      <FormControl w={600}>
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
      <Link color="red.500">Sign in</Link>
    </Flex>
  </Flex>
);
