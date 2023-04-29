//2-2. Link to="라우터" 태그를 이용하면 라우팅 할 수 있다.

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImYoutube } from "react-icons/im";

export default function SearchBar() {
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => setKeyword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault(); // TODO:preventDefault 공부
    setKeyword("");
    navigate(`videos/${keyword}`);
  };
  return (
    <div>
      <Link to="/">
        <a>
          <ImYoutube /> Youtube
        </a>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="...Search"
          value={keyword}
          onChange={handleChange}
        />
        <input type="submit" value="검색" />
      </form>
    </div>
  );
}
