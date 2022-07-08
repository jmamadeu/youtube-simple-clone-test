declare namespace Module {
  declare namespace Youtube {
    type VideoItem = {
      kind?: string;
      etag?: string;
      id: string;
      snippet?: VideoSnippet;
    };

    type VideoSnippet = {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: VideoSnippetThumbnail;
      channelTitle: string;
      tags: VideoSnippetTag;
      categoryId: string;
      liveBroadcastContent: string;
      localized: {
        title: string;
        description: string;
      };
    };

    type VideoSnippetTag = string[];

    type VideoSnippetThumbnail = {
      default: VideoSnippetThumbnailOption;
      medium: VideoSnippetThumbnailOption;
      high: VideoSnippetThumbnailOption;
    };

    type VideoSnippetThumbnailOption = {
      url: string;
      width: number;
      height: number;
    };
  }
}
