import {
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightAddon
} from "@chakra-ui/react";

import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { searchYoutubeVideo } from "../../services/apis/youtube/use-api-search-video";
import { queryClient } from "../../services/query-client";
import { Link } from "../link";

export const Header = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const { push } = useRouter();

  const handleInputSearchChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(value);
  };

  const handleSearchButtonClick = () => {
    if (!searchInputValue) return;

    const cachedData = localStorage.getItem("@myCustomYoutubeClone");
    
    const cached: unknown  = JSON.parse(cachedData as string) ?? []

    localStorage.setItem(
      "@myCustomYoutubeClone",
      JSON.stringify([...(cached as string[]), searchInputValue]),
    );

    queryClient.prefetchQuery(["videos", searchInputValue], () =>
      searchYoutubeVideo({ queryToSearch: searchInputValue }),
    );

    push(`/search?q=${searchInputValue}`);
  };

  return (
    <Flex as="header" justifyContent="space-between" alignItems="center">
      <Link href="/">
        <Image
          src="/assets/youtube-svgrepo-com.svg"
          width={50}
          height={50}
          alt="youtube logo"
        />
      </Link>

      <Flex>
        <FormControl w={600}>
          <InputGroup>
            <Input
              value={searchInputValue}
              onChange={handleInputSearchChange}
              placeholder="search your video"
            />
            <InputRightAddon>
              <Button onClick={handleSearchButtonClick}>Search</Button>
            </InputRightAddon>
          </InputGroup>
        </FormControl>
      </Flex>

      <Flex gap={2}>
        {/* <Link h>Create account</Link> */}
        {/* <Text>or</Text> */}
        <Link href="/history">History</Link>
      </Flex>
    </Flex>
  );
};
