"use client";
import BookList from "@/components/BookList/BookList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useBooks } from "@/hooks/useBooks";
import React from "react";
export default function Home() {
  const { books, setBookName } = useBooks();
  const handleSearch = (userInput: string) => {
    setBookName(userInput.toLowerCase());
  };
  return (
    <div className="w-full h-full bg-slate-400 flex flex-col justify-center items-center gap-12">
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
}
