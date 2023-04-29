import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import axios from 'axios';

export default function Videos() {
  const { keyword } = useParams();
  // Access the client
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return axios.get(`/videos/${keyword ? "search" : "popular"}.json`)
      .then((res) => res.data.items);
  });
  return (
    <>
      <h1>Videos{keyword ? `🔍 : ${keyword}` : "🔥"}</h1>
      {isLoading && <p>로딩중...</p>}
      {error && <h1>ERROR!!!</h1>}
      {videos && (
        <ul>
          {videos.map((video) => <VideoCard key={video.id} video={video} />)}
        </ul>
      )}
    </>
  );
}
