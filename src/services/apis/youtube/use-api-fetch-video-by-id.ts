import { useQuery } from "react-query";
import { apiInstance } from "../api";

type FetchVideosParamsType = {
  id: string;
};

const fetchVideos = async ({ id }: FetchVideosParamsType) => {
  const videosResponse = await apiInstance.get<API.Youtube.VideoItemResponse>(
    `/videos?id=${id}&part=snippet,contentDetails,statistics&maxResults=40`,
  );

  return videosResponse.data;
};

export const useApiFetchYoutubeVideoById = ({ id }: FetchVideosParamsType) => {
  return useQuery(["videos", id], () => fetchVideos({ id }));
};
