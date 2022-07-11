import { SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import { VideoPreviewCardLink } from "../components/video-preview-card-link";
import { useApiFetchYoutubeVideos } from "../services/apis/youtube/use-api-fetch-videos";

const Home: NextPage = () => {
  const { data, isLoading } = useApiFetchYoutubeVideos({});

  return (
    <>
      {isLoading && <h1>Loading</h1>}

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} marginTop={4}>
        {data?.items.map(({ snippet, id }) => (
          <VideoPreviewCardLink id={id} snippet={snippet} key={id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Home;
