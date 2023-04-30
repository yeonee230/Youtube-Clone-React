import { createContext, useContext } from "react";
import FakeYoutubeClient from "../api/fakeYoutubeClient";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClinet";

export const YoutubApiContext = createContext();

const client = new FakeYoutubeClient();
//const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubApiProvider({ children }) {
  return (
    <YoutubApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubApiContext.Provider>
  );
}

export function useYoutubApi() {
  return useContext(YoutubApiContext);
}
