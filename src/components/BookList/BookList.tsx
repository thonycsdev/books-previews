import React from "react";
import BookCard from "../BookCard/BookCard";
import { Book } from "@/models/book";

type BookListProps = {
  books: Book[];
};

function BookList(props: BookListProps) {
  const { books } = props;
  return (
    <ul className="flex w-full h-auto gap-10 flex-wrap justify-center">
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </ul>
  );
}

export default BookList;
