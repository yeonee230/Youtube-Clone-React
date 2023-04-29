import React from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  return (
    <div>
      <h1>Videos{keyword ?  `🔍 : ${keyword}` : '🔥'}</h1>
      {/* 만약 prams에서 받은 키워드가 있다면  "Videos 🔍 : keyword" : "Videos🔥" */}
    </div>
  );
}
