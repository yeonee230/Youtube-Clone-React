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
      <article className="basis-4/6 px-8 pt-3">
        <div className="relative pt-[56%] w-full h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            title={title}
            id="player"
            type="text/html"
            width="100%"
            height="600"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="0"
          />
        </div>
        <div className="py-8">
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
