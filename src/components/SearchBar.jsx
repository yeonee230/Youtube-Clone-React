//2-2. Link to="라우터" 태그를 이용하면 라우팅 할 수 있다.

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ImYoutube } from "react-icons/im";
import { BiSearch } from "react-icons/bi";

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
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center ml-5">
        <ImYoutube className="text-4xl text-brand" />
        <h1 className="text-2xl font-bold ml-2 ">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center " onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 px-6 outline-none bg-black text-gray-50 rounded-l-3xl text-lg border-solid border-myGray2 border-2 "
          type="text"
          placeholder="Search"
          value={text}
          onChange={handleChange}
        />
        <button className="bg-myGray px-4 rounded-r-3xl border-solid border-myGray2 border-2 ">
          <BiSearch />
        </button>
      </form>
    </header>
  );
}
