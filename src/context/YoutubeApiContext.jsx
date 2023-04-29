import { createContext, useContext } from "react";
import FakeYoutube from "../api/fakeYoutube";
import Youtube from "../api/youtube";

export const YoutubApiContext = createContext();

export function YoutubApiProvider({ children }) {
  const youtube = new FakeYoutube(); //new Youtube(); 
  return (
    <YoutubApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubApiContext.Provider>
  );
}

export function useYoutubApi() {
  return useContext(YoutubApiContext);
}
