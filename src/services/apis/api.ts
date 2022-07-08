import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  },
});
