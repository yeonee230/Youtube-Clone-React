import React from "react";
import { useQuery } from "react-query";
import { useYoutubApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubApi();
  const { data: url } = useQuery(["channel", id], () => youtube.channelImageURL(id));
  return (
    <div>
      {url && <img src={url} alt={name} />}
      <p>🔆 {name}</p>
    </div>
  );
}
