declare namespace API {
  declare namespace Youtube {
    type VideoItemResponse = {
      kind: string;
      etag: string;
      items: Module.Youtube.VideoItem[];
      pageInfo: {
        totalResults: number;
        resultsPerPage: number;
      };
    };

    type SearchVideoItemResponse = Omit<VideoItemResponse, "items"> & {
      items: Module.Youtube.VideoSearchedItem[];
    };
  }
}
