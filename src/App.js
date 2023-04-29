import React from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";

export default function App() {
 
  return (
    <div>
    <SearchBar />
    <hr/>
    <Outlet />
  </div>
  );
}
