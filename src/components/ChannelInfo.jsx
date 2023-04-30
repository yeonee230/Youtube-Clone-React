import React from "react";
import { useQuery } from "react-query";
import { useYoutubApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubApi();
  const { data: url } = useQuery(["channel", id], () => youtube.channelImageURL(id));
  return (
    <div className="flex my-4 mb-8 items-center ">
      {url && <img className="w-10 h-10 rounded-full " src={url} alt={name} />}
      <p className="font-medium text-lg ml-3">{name}</p>
    </div>
  );
}
