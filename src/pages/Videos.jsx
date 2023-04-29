import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import FakeYoutube from "../api/fakeYoutube";
import Youtube from "../api/youtube";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams();
  // Access the client
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    const youtube = new FakeYoutube();
    return youtube.search(keyword);
  });
  return (
    <>
      <h1>Videos{keyword ? `🔍 : ${keyword}` : "🔥"}</h1>
      {isLoading && <p>로딩중...</p>}
      {error && <h1>ERROR!!!</h1>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
