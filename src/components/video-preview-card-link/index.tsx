import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

import NextLink from "next/link";

type VideoPreviewCardLinkProps = Module.Youtube.VideoItem;

export const VideoPreviewCardLink = ({
  id,
  snippet,
}: VideoPreviewCardLinkProps) => (
  <NextLink href={`/watch?id=${id}`} passHref>
    <Link>
      <Box>
        <Image
          src={snippet?.thumbnails.medium.url ?? ""}
          width={snippet?.thumbnails.medium.width}
          height={snippet?.thumbnails.medium.height}
          alt="thumbnail image"
        />
        <Flex mt={2} background="white" flexDir="column">
          <Text noOfLines={1}>{snippet?.title}</Text>
          <Text fontSize="xs" fontWeight="light">
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "full",
            }).format(new Date(snippet?.publishedAt ?? ""))}
          </Text>
          <Text fontSize="sm" fontWeight="bold" color="gray.500">
            {snippet?.channelTitle}
          </Text>
        </Flex>
      </Box>
    </Link>
  </NextLink>
);
