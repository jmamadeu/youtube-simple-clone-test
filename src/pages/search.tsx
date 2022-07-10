import { SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { VideoPreviewCardLink } from "../components/video-preview-card-link";
import { useApiSearchYoutubeVideo } from "../services/apis/youtube/use-api-search-video";

const SearchedVideos: NextPage = () => {
  const router = useRouter();
  const { q } = router.query;

  const { data, isLoading } = useApiSearchYoutubeVideo({
    queryToSearch: q as string,
  });

  return (
    <>
      {isLoading && <h1>Loading</h1>}

      <SimpleGrid columns={4} spacing={4} marginTop={4}>
        {data?.items.map(({ snippet, id }) => (
          <VideoPreviewCardLink
            id={id.videoId}
            snippet={snippet}
            key={`${id.videoId}-${snippet?.channelId}`}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default SearchedVideos;
