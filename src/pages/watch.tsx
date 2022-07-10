import { Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { VideoGridList } from "../components/video-grid-list";
import { VideoPlayer } from "../components/video-player";
import { useApiFetchYoutubeVideos } from "../services/apis/youtube/use-api-fetch-videos";

const WatchVideo: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isFetching } = useApiFetchYoutubeVideos({});

  return (
    <>
      <Grid
        mt={2}
        h="500px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={6}>
          <VideoPlayer videoId={id as string} />
        </GridItem>
      </Grid>

      {isFetching || !data?.items.length ? (
        <h1>Loading</h1>
      ) : (
        <VideoGridList data={data?.items} />
      )}
    </>
  );
};

export default WatchVideo;
