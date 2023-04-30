import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RealatedVideos from "../components/RealatedVideos";
import { formatAgo } from "../util/date";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelTitle, publishedAt, description, channelId } =
    video.snippet;

  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          className="px-8 pt-4"
          title={title}
          id="player"
          type="text/html"
          width="100%"
          height="600"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameborder="0"
        />
        <div className="p-8">
          <h2 className="font-bold text-xl">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <div className="bg-myGrayDes p-3 rounded-lg ">
            <p className="font-bold mb-3">{formatAgo(publishedAt, "ko")}</p>
            <pre className="whitespace-pre-wrap">{description}</pre>
          </div>
        </div>
      </article>
      <article className="basis-2/6">
        <RealatedVideos id={video.id} />
      </article>
    </section>
  );
}
