import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";
import Root from "./pages/Root";
//1. 라우터 만들기
//2. outlet 만들기
export default function App() {
  //1-1. 브라우저 라우터를 만든다.
  //1-3. 경로 설정 { path: '/', element: <Home />}
  //     pages 폴더 만들고 Home.jsx 파일 만들기
  const router = createBrowserRouter([
    // 2-4. elemnet:에 <Root/>추가 하고, children 만들어준다.
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "/videos", element: <Videos /> },
        { path: "/videos/query", element: <Videos /> },
        { path: "/videos/watch/:videoId", element: <VideoDetail /> },
      ],
    },
  ]);
  return (
    //1-2. RouterProvider 설정
    <RouterProvider router={router} />
  );
}
