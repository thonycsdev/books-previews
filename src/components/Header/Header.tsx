import React, { useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import BooksContext from "@/hooks/Contexts/BooksContext";

function Header() {
  const { setBookName } = useContext(BooksContext);
  return (
    <div className=" flex justify-around w-full items-center h-20 bg-slate-500">
      <div>Book Finder</div>
      <SearchBar onSearch={(bookName) => setBookName(bookName)} />
    </div>
  );
}

export default Header;
