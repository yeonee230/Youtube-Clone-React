import React from "react";
import { useQuery } from "react-query";
import { useYoutubApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function RealatedVideos({ id }) {
  const { youtube } = useYoutubApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => {
    return youtube.search(id);
  });
  return (
    <div>
      {isLoading && <p>로딩중...</p>}
      {error && <h1>ERROR!!!</h1>}
      {videos && (
        <ul className="">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
