"use client";
import BookList from "@/components/BookList/BookList";
import { useBooks } from "@/hooks/useBooks";
import React, { useState } from "react";
export default function Home() {
  const [userInput, setUserInput] = useState("harry potter");
  const { books, setBookName } = useBooks();
  const handleSearch = () => {
    setBookName(userInput.toLowerCase());
  };
  return (
    <div className="w-full h-full bg-slate-400">
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={handleSearch}>SEARCH</button>
      <BookList books={books} />
    </div>
  );
}
