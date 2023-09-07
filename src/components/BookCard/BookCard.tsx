import { Book } from "@/models/book";
import Image from "next/image";
import React from "react";

type BookCardProps = {
  book: Book;
};

function BookCard(props: BookCardProps) {
  const { book } = props;
  const bookImage = book.volumeInfo.imageLinks?.thumbnail
    ? book.volumeInfo.imageLinks.thumbnail
    : "/bookDefault.jpg";
  return (
    <li className="w-80 w- h-80 bg-green-500 flex justify-center items-center m-2 text-center flex-col">
      <Image
        width={100}
        height={100}
        src={bookImage}
        alt={book.volumeInfo.title}
        className="justify-self-start"
      />
      <div>{book.volumeInfo.title}</div>
    </li>
  );
}

export default BookCard;
