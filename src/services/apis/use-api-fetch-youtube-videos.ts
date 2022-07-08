import { useQuery } from "react-query";
import { apiInstance } from "./api";

type FetchVideosParamsType = {
  chart?: "mostPopular" | "chartUnspecified";
  part?: string | "snippet";
};

const fetchVideos = async ({
  chart = "mostPopular",
  part = "snippet",
}: FetchVideosParamsType) => {
  const videosResponse = await apiInstance.get<API.Youtube.VideoItemResponse>(
    `/videos?chart=${chart}&part=${part}`,
  );

  return videosResponse.data;
};

export const useApiFetchYoutubeVideos = (props: FetchVideosParamsType) => {
  return useQuery(["videos"], () => fetchVideos(props));
};
