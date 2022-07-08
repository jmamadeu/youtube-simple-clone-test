type VideoPlayerProps = {
  videoId: string;
};

const YOUTUBE_PLAYER_LINK = "https://www.youtube.com/embed";

export const VideoPlayer = ({ videoId }: VideoPlayerProps) => (
  <iframe
    src={`${YOUTUBE_PLAYER_LINK}/${videoId}`}
    width="100%"
    height="100%"
  ></iframe>
);
