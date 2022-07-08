declare namespace API {
  declare namespace Youtube {
    type VideoItemResponse = {
      kind: string
      etag: string
      items: Module.Youtube.VideoItem[]
      pageInfo: {
        totalResults: number
        resultsPerPage: number
      }
    }
  }
}