import { useQuery } from "react-query";
import { apiInstance } from "./api";

const fetchVideos = async () => {
  const videosResponse = await apiInstance.get<API.Youtube.VideoItemResponse>(`/videos?chart=mostPopular`);

  return videosResponse.data;
};

export const useApiFetchYoutubeVideos = () => {
  return useQuery(["videos"], fetchVideos);
};
