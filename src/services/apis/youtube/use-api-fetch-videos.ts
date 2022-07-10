import { useQuery } from "react-query";
import { apiInstance } from "../api";

type FetchVideosParamsType = {
  chart?: "mostPopular" | "chartUnspecified";
  part?: string | "snippet";
  maxResults?: number
};

const fetchVideos = async ({
  chart = "mostPopular",
  part = "snippet",
  maxResults = 40
}: FetchVideosParamsType) => {
  const videosResponse = await apiInstance.get<API.Youtube.VideoItemResponse>(
    `/videos?chart=${chart}&part=${part}&maxResults=${maxResults}&maxResults=40`,
  );

  return videosResponse.data;
};

export const useApiFetchYoutubeVideos = (props: FetchVideosParamsType) => {
  return useQuery(["videos"], () => fetchVideos(props));
};
