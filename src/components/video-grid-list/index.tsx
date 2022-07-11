import { SimpleGrid } from "@chakra-ui/react";
import { VideoPreviewCardLink } from "../video-preview-card-link";

type VideoGridListProps = {
  data: Module.Youtube.VideoItem[];
};

export const VideoGridList = ({ data }: VideoGridListProps) => {
  return (
    <SimpleGrid columns={[1,2,2,4]} spacing={4} marginTop={4}>
      {data?.map(({ snippet, id }) => (
        <VideoPreviewCardLink id={id} snippet={snippet} key={id} />
      ))}
    </SimpleGrid>
  );
};
