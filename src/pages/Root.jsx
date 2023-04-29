//2-1. root page 만들고 outlet 설정한다..

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <div>
      {/* 2-3. Navbar를 넣어준다.  */}
      <Navbar />
      <Outlet />
    </div>
  );
}
