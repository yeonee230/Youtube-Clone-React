//2-2. Link to="라우터" 태그를 이용하면 라우팅 할 수 있다.

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ImYoutube } from "react-icons/im";

export default function SearchBar() {
  const { keyword } = useParams();
  const [text, setText] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault(); // TODO:preventDefault 공부 input부분 다시 강의 보기
    // setKeyword("");
    navigate(`videos/${text}`);
  };
  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <header>
      <Link to="/">
        <ImYoutube />
        <h1 className="text-2xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="...Search"
          value={text}
          onChange={handleChange}
        />
        <input type="submit" value="검색" />
      </form>
    </header>
  );
}
