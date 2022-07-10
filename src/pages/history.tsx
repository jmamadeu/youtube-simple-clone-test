import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Link } from "../components/link";

const History: NextPage = () => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("@myCustomYoutubeClone");
    setHistory(JSON.parse(data ?? "[]") ?? []);
  }, []);

  return (
    <Flex alignItems="center" flexDirection="column" mt={10}>
      <Box>
        <Text fontSize="xl">{history.length ? "See your search history": "Your history list is empty"}</Text>
      </Box>
      <SimpleGrid columns={1} spacing={4}>
        {history.map((search, idx) => (
          <Link key={idx} href={`/search?q=${search}`}>
            {search}
          </Link>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default History;
