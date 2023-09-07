"use client";
import { useBooks } from "@/hooks/useBooks";
import React, { useState } from "react";
export default function Home() {
  const [userInput, setUserInput] = useState("harry potter");
  const { books, setBookName } = useBooks();
  const handleSearch = () => {
    setBookName(userInput.toLowerCase());
  };
  return (
    <div>
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={handleSearch}>SEARCH</button>
      {books?.map((book) => (
        <div key={book.id}>{book.volumeInfo.title}</div>
      ))}
    </div>
  );
}
