import React, { useContext } from "react";
import BookCard from "../BookCard/BookCard";
import BooksContext from "@/hooks/Contexts/BooksContext";

function BookList() {
  const { books } = useContext(BooksContext);
  if (!books.length) {
    return <div>Please, use the search bar to search for books</div>;
  }
  return (
    <ul className="flex w-full h-auto gap-10 flex-wrap justify-center">
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </ul>
  );
}

export default BookList;
