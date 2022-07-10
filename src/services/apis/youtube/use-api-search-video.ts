import { useQuery } from "react-query";
import { apiInstance } from "../api";

type useApiSearchVideoProps = {
  queryToSearch: string;
};

const searchVideos = async (props: useApiSearchVideoProps) => {
  const videosResponse = await apiInstance.get<API.Youtube.VideoItemResponse>(
    `/search?part=snippet&q=${props.queryToSearch}&maxResults=40`,
  );

  return videosResponse.data;
};

export const useApiSearchYoutubeVideo = (props: useApiSearchVideoProps) => {
  return useQuery(["videos", props.queryToSearch], () => searchVideos(props));
};
