// Mock data 가져오기
import axios from "axios";

export default class FakeYoutubeClient {
  async search({params}) {
    return axios.get(`/videos/${params.relatedToVideoID ? "search" : "related"}.json`);
  }

  async videos() {
    return axios.get("/videos/popular.json");
  }

  async channels() {
    return axios.get("/videos/channel.json");
  }
}
