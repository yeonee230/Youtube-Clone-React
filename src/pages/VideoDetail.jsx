import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RealatedVideos from "../components/RealatedVideos";
import { formatAgo } from "../util/date";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelTitle, publishedAt, description,channelId } = video.snippet;

  return (
    <section>
      <article>
      <iframe
        title="youtube-video"
        id="player"
        type="text/html"
        width="100%"
        height="640"
        src={`http://www.youtube.com/embed/${video.id}`}
        frameborder="0"
      />
      <div>
        <h2>{title}</h2>
        <ChannelInfo id={channelId} name={channelTitle}/>
        <pre>{description}</pre>
        <p>{formatAgo(publishedAt, "ko")}</p>
      </div>
      </article>
    <article>
      <RealatedVideos id={video.id} />
    </article>
    </section>
  );
}
