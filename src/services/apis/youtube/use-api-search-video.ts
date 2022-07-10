import { useQuery } from "react-query";
import { apiInstance } from "../api";

type useApiSearchVideoProps = {
  queryToSearch: string;
};

export const searchYoutubeVideo = async (props: useApiSearchVideoProps) => {
  const videosResponse = await apiInstance.get<API.Youtube.SearchVideoItemResponse>(
    `/search?part=snippet&q=${props.queryToSearch}&maxResults=40`,
  );

  return videosResponse.data;
};

export const useApiSearchYoutubeVideo = (props: useApiSearchVideoProps) => {
  return useQuery(["videos", props.queryToSearch], () => searchYoutubeVideo(props));
};
