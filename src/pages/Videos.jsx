import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import FakeYoutube from "../api/fakeYoutube";
import Youtube from "../api/youtube";
import VideoCard from "../components/VideoCard";
import { useYoutubApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    return youtube.search(keyword);
  });
  return (
    <>
      <h1>Videos{keyword ? `🔍 : ${keyword}` : "🔥"}</h1>
      {isLoading && <p>로딩중...</p>}
      {error && <h1>ERROR!!!</h1>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
